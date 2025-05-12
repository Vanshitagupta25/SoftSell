"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, CreditCard } from "lucide-react"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import ChatWidget from "../components/ChatWidget"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check user preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold">SoftSell</span>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#how-it-works" className="hover:text-emerald-500 transition-colors">
                How It Works
              </a>
              <a href="#why-choose-us" className="hover:text-emerald-500 transition-colors">
                Why Choose Us
              </a>
              <a href="#testimonials" className="hover:text-emerald-500 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-emerald-500 transition-colors">
                Contact
              </a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* How It Works */}
        <HowItWorks />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}