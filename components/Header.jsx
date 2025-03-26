"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <header className="border-b-2 border-blue-600 py-4 dark:bg-gray-800 dark:border-blue-400">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 -ml-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-js1IgNzZkt3fgVSP3oM3noAKBCtW8a.png"
              alt="Lomakyla Rakkaranta Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <span className="text-xl font-bold text-slate-800 dark:text-white md:hidden lg:inline">
            </span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              href="/signup"
              className="text-slate-700 hover:text-blue-600 font-medium dark:text-slate-300 dark:hover:text-blue-400"
            >
              Signup
            </Link>
            <Link
              href="/login"
              className="text-slate-700 hover:text-blue-600 font-medium dark:text-slate-300 dark:hover:text-blue-400"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-blue-600 font-medium dark:text-slate-300 dark:hover:text-blue-400"
            >
              Contact
            </Link>
            <Link
              href="/reservations"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Reservations
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="border-slate-200 dark:border-slate-800"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

