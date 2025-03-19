import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Long from "../../public/Long.png"

import Logo from "../../public/Logo.jpg"


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white py-3 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={Long} 
                alt="Asiapower Logo" 
                className="h-12"
              />
              
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">RPO</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">Projects</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">Clientele</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">Enquiry</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            {/* Vision Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Our Vision is to be the Leading Supplier of International Manpower to the GCC Region
              </h2>
            </motion.div>

            {/* Choice Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white backdrop-blur rounded-lg shadow-2xl p-8 max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="flex justify-center items-center mb-6">
                  <img 
                    src={Long}
                    alt="Asiapower Logo" 
                    className="h-12"
                  />
                  
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">You're here to:</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/main')}
                  className="w-full py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg shadow-lg"
                >
                  Source Manpower
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/job-form')}
                  className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg shadow-lg"
                >
                  Apply For A Job
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage