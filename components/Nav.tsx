"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Globe } from "@phosphor-icons/react/dist/ssr";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const langRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);
  
  const t = useTranslations("Nav");
  const currentLocale = useLocale();
  const locales = ["en", "sk", "de"];

  // Handle scroll for header hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsLangOpen(false); // Close dropdown on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle click outside to close language dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langRef.current && !langRef.current.contains(event.target as Node) &&
        langMobileRef.current && !langMobileRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-sm border-b border-[--color-border] bg-[--color-bg]/80 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-shrink-0 z-50 relative">
          <svg viewBox="0 0 40 40" className="h-8 w-8 text-current" fill="currentColor">
            <path d="M10 10 L15 10 L20 20 L25 10 L30 10 L30 30 L25 30 L25 20 L20 28 L15 20 L15 30 L10 30 Z" />
          </svg>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold relative">
          <a href="#work" className="hover:text-[--color-accent] transition-colors">{t("work")}</a>
          <a href="#story" className="hover:text-[--color-accent] transition-colors">{t("story")}</a>
          <a href="#connect" className="hover:text-[--color-accent] transition-colors">{t("connect")}</a>
          
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity uppercase"
              aria-label="Language Selector"
            >
              <Globe size={18} weight="bold" />
              <span>{currentLocale}</span>
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full mt-4 right-0 w-24 py-2 bg-[--color-bg] border border-[--color-border] rounded-xl shadow-xl flex flex-col backdrop-blur-md">
                {locales.map((l) => (
                  <a 
                    key={l} 
                    href={`/${l}`} 
                    className={`px-4 py-2 text-xs uppercase hover:bg-[--color-surface] transition-colors ${currentLocale === l ? "font-bold text-[--color-accent]" : "opacity-70"}`}
                  >
                    {l}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="mailto:martin.lehocky2007@gmail.com" className="bg-[--color-accent] text-[--color-bg] text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            {t("hire")}
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <div className="relative" ref={langMobileRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity uppercase text-xs font-semibold"
            >
              <Globe size={18} weight="bold" />
              <span>{currentLocale}</span>
            </button>
            
            {isLangOpen && (
              <div className="absolute top-full mt-4 right-0 w-24 py-2 bg-[--color-bg] border border-[--color-border] rounded-xl shadow-xl flex flex-col backdrop-blur-md">
                {locales.map((l) => (
                  <a 
                    key={l} 
                    href={`/${l}`} 
                    className={`px-4 py-2 text-xs uppercase hover:bg-[--color-surface] transition-colors ${currentLocale === l ? "font-bold text-[--color-accent]" : "opacity-70"}`}
                  >
                    {l}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-6 h-0.5 bg-current transform transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-current transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-[--color-bg] z-40 flex flex-col items-center justify-center gap-8 text-3xl font-[--font-display] font-bold">
          <a href="#work" onClick={() => setIsOpen(false)}>{t("work")}</a>
          <a href="#story" onClick={() => setIsOpen(false)}>{t("story")}</a>
          <a href="#connect" onClick={() => setIsOpen(false)}>{t("connect")}</a>
        </div>
      )}
    </header>
  );
}
