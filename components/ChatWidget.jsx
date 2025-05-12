"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hi there! 👋 How can I help you with selling your software licenses today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const quickQuestions = [
    "How do I sell my license?",
    "Is there any fee involved?",
    "How long does it take to get paid?",
  ]

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, messages])

  const handleSendMessage = async (content) => {
    if (!content.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      content,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(
      () => {
        const botResponse = {
          id: Date.now() + 1,
          type: "bot",
          content: generateResponse(content),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const generateResponse = (question) => {
    const lowerQuestion = question.toLowerCase()

    // Predefined responses for quick questions
    if (lowerQuestion.includes("sell my license") || lowerQuestion.includes("how to sell")) {
      return "Selling your license is easy! Just upload your license details through our secure portal, and we'll provide a valuation within 24 hours. Once you accept our offer, we'll guide you through the transfer process."
    }

    if (lowerQuestion.includes("fee") || lowerQuestion.includes("cost") || lowerQuestion.includes("commission")) {
      return "We charge a small commission of 10% on successful sales. There are no upfront fees or charges if we can't sell your license. You'll always know exactly how much you'll receive before accepting any offer."
    }

    if (lowerQuestion.includes("how long") || lowerQuestion.includes("time") || lowerQuestion.includes("get paid")) {
      return "Once you accept our offer, you'll typically receive payment within 48 hours via your preferred payment method (PayPal, bank transfer, or cryptocurrency)."
    }

    // Generic responses for other questions
    const genericResponses = [
      "That's a great question! Our team specializes in software license resale. We typically buy licenses for popular business, creative, and development software. Would you like to know about specific software we're interested in?",
      "Thanks for asking! SoftSell has been in the license resale business for over 5 years, and we've helped thousands of customers recover value from their unused software. Is there something specific about our experience you'd like to know?",
      "I understand you're asking about that. While I don't have the specific answer, our license specialists would be happy to help. Would you like me to arrange for someone to contact you?",
      "Great question! The value of your license depends on several factors including the software type, version, and current market demand. Upload your license details for a free valuation to get an exact quote.",
    ]

    return genericResponses[Math.floor(Math.random() * genericResponses.length)]
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  const handleQuickQuestion = (question) => {
    handleSendMessage(question)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] max-h-[calc(100vh-120px)] bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Chat header */}
            <div className="p-4 bg-emerald-500 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <h3 className="font-semibold">SoftSell Assistant</h3>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 rounded-full hover:bg-emerald-600 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-emerald-500 text-white rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-700 rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === "bot" && (
                        <Bot size={18} className="mt-1 text-emerald-500 dark:text-emerald-400" />
                      )}
                      <div>{message.content}</div>
                      {message.type === "user" && <User size={18} className="mt-1 text-white" />}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 dark:bg-gray-700 rounded-bl-none">
                    <div className="flex items-center space-x-2">
                      <Bot size={18} className="text-emerald-500 dark:text-emerald-400" />
                      <Loader2 size={18} className="animate-spin" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat input */}
            <div className="p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about selling licenses!"
                  className="flex-1 py-2 px-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-full bg-emerald-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-600 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  )
}
