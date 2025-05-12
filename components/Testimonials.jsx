"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      avatar: "/placeholder.svg?height=80&width=80",
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "TechCorp Inc.",
      quote:
        "SoftSell made it incredibly easy to recover costs from our unused licenses. The process was smooth and the payment was processed quickly.",
    },
    {
      avatar: "/placeholder.svg?height=80&width=80",
      name: "Michael Chen",
      role: "Finance Director",
      company: "Global Solutions",
      quote:
        "I was skeptical at first, but SoftSell exceeded my expectations. Their valuation was fair and the transaction was secure and transparent.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Customer Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
