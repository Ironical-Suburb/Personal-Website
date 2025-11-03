import { useState, useEffect } from 'react'

// Global state for manual theme override
let manualThemeOverride = null
const themeListeners = new Set()

export const setThemeOverride = (mode) => {
  manualThemeOverride = mode
  themeListeners.forEach(listener => listener())
}

export const clearThemeOverride = () => {
  manualThemeOverride = null
  themeListeners.forEach(listener => listener())
}

/**
 * Hook that provides time-based theme colors
 * Changes between light and dark themes based on time of day
 * Supports manual override via setThemeOverride
 */
export const useTimeBasedTheme = () => {
  const getTheme = () => {
    if (manualThemeOverride) {
      return manualThemeOverride
    }
    const hour = new Date().getHours()
    return hour >= 6 && hour < 18 ? 'light' : 'dark'
  }

  const [theme, setTheme] = useState(getTheme)

  useEffect(() => {
    const listener = () => {
      setTheme(getTheme())
    }
    themeListeners.add(listener)

    const updateTheme = () => {
      if (!manualThemeOverride) {
        const hour = new Date().getHours()
        setTheme(hour >= 6 && hour < 18 ? 'light' : 'dark')
      }
    }

    // Update theme every hour (only if no manual override)
    const interval = setInterval(updateTheme, 60 * 60 * 1000)
    
    // Update theme on mount
    updateTheme()

    return () => {
      clearInterval(interval)
      themeListeners.delete(listener)
    }
  }, [])

  // Light theme colors (day time 6 AM - 6 PM)
  const lightTheme = {
    mode: 'light',
    bg: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      accent: 'bg-primary-50',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
    },
    border: 'border-gray-200',
    card: 'bg-white',
    navbar: 'bg-white',
    footer: 'bg-gray-900',
    gradient: 'from-primary-50 to-white',
    shadow: 'shadow-md',
    hover: {
      card: 'hover:bg-primary-50',
      text: 'hover:text-primary-600',
    },
  }

  // Dark theme colors (night time 6 PM - 6 AM)
  const darkTheme = {
    mode: 'dark',
    bg: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      accent: 'bg-gray-700',
    },
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
    },
    border: 'border-gray-700',
    card: 'bg-gray-800',
    navbar: 'bg-gray-900',
    footer: 'bg-black',
    gradient: 'from-gray-900 to-gray-800',
    shadow: 'shadow-lg',
    hover: {
      card: 'hover:bg-gray-700',
      text: 'hover:text-primary-400',
    },
  }

  return theme === 'light' ? lightTheme : darkTheme
}

