"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

interface PersonaCardProps {
  name: string
  tagline: string
  avatar?: string
  onClick: () => void
}

export default function PersonaCard({ name, tagline, avatar, onClick }: PersonaCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              {avatar ? (
                <img 
                  src={avatar} 
                  alt={name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
            {/* Pulse ring on hover */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 scale-110 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {tagline}
          </p>

          {/* Call to action hint */}
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Click to chat</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}