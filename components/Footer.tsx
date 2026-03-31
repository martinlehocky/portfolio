"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="py-8 px-6 max-w-7xl mx-auto w-full border-t border-[--color-border]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[--color-text-muted] font-medium">
        <p>Martin Lehocký &copy; {new Date().getFullYear()}</p>
        <p>{t("built")}</p>
      </div>
    </footer>
  );
}
