"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-emerald-500 mb-6" />,
      title: "Upload Your License",
      description: "Simply upload your unused software license details to our secure platform.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-emerald-500 mb-6" />,
      title: "Get a Free Valuation",
      description: "Our experts will assess your license and provide a competitive quote within 24 hours.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-emerald-500 mb-6" />,
      title: "Receive Payment",
      description: "Once you accept our offer, we'll process your payment quickly and securely.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
