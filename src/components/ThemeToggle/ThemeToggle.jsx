import React from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="text-xl leading-none transition-colors duration-300"
    >
      <i className={isDark ? 'fa-solid fa-moon text-teal-300' : 'fa-solid fa-sun text-yellow-400'}></i>
    </button>
  )
}
