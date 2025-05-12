import { CreditCard } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <CreditCard className="h-6 w-6 text-emerald-400" />
            <span className="text-xl font-bold">SoftSell</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}