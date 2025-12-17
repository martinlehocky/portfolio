"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useTheme as useNextTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

interface CustomThemeProviderProps extends ThemeProviderProps {
  suppressHydrationWarning?: boolean
}

export function ThemeProvider({
                                children,
                                suppressHydrationWarning,
                                ...props
                              }: CustomThemeProviderProps) {
  return (
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
  )
}

export function useTheme() {
  const { theme, setTheme } = useNextTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return { theme, setTheme, toggleTheme }
}