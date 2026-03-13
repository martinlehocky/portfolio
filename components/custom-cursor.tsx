"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    if (isTouchDevice) {
      cursor.style.display = "none"
      follower.style.display = "none"
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      cursor.style.display = "none"
      follower.style.display = "none"
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button']")) {
        gsap.to(cursor, { scale: 1.5, duration: 0.2 })
        gsap.to(follower, { scale: 1.5, duration: 0.3 })
      }
    }

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button']")) {
        gsap.to(cursor, { scale: 1, duration: 0.2 })
        gsap.to(follower, { scale: 1, duration: 0.3 })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-foreground/80 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/40 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
    </>
  )
}
