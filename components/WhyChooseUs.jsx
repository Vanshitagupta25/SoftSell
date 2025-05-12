"use client"

import { motion } from "framer-motion"
import { Clock, Award, Shield } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-emerald-500" />,
      title: "Fast Payouts",
      description: "Get paid within 48 hours of accepting our offer, no lengthy waiting periods.",
    },
    {
      icon: <Award className="h-10 w-10 text-emerald-500" />,
      title: "Trusted by Thousands",
      description: "Join thousands of satisfied customers who have successfully sold their licenses.",
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: "Secure Transactions",
      description: "Our platform uses bank-level encryption to keep your information safe.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg mr-4 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}