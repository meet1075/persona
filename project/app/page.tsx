"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PersonaCard from "@/components/PersonaCard"
import ChatModal from "@/components/ChatModal"
import ThemeToggle from "@/components/ThemeToggle"
import { MessageSquare } from "lucide-react"

const personas = [
  {
    name: "Hitesh Choudhary",
    tagline: "Full-stack developer, educator, and YouTube creator. Passionate about teaching web development and making coding accessible to everyone.",
    avatar: "https://avatars.githubusercontent.com/u/11613311?v=4"
  },
  {
    name: "Piyush Garg",
    tagline: "Software engineer and tech educator. Expert in modern JavaScript, React, Node.js, and building scalable applications.",
    avatar: "https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Favatar.png&w=1080&q=75"
  }
]

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null)

  const handlePersonaClick = (personaName: string) => {
    setSelectedPersona(personaName)
  }

  const handleCloseModal = () => {
    setSelectedPersona(null)
  }

  const selectedPersonaData = personas.find(p => p.name === selectedPersona)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-500">
      {/* Header */}
      <motion.header 
        className="relative z-10 p-6 sm:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg">
              <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              ConvoBuddy
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 px-6 sm:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Chat with AI
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Personas</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Chat with AI versions of your favorite tech mentors. Ask, explore, and learn from the best in the field—anytime, anywhere.
            </p>
          </motion.div>

          {/* Persona Cards Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <PersonaCard
                  name={persona.name}
                  tagline={persona.tagline}
                  avatar={persona.avatar}
                  onClick={() => handlePersonaClick(persona.name)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
{/* Features */}
<motion.div 
  className="mt-20 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
>
  <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
    {[
      { 
        icon: "🚀", 
        title: "Interactive Learning", 
        desc: "Real-time conversations with AI personas",
        color: "from-pink-500 to-rose-500"
      },
      { 
        icon: "🎯", 
        title: "Expert Insights", 
        desc: "Get advice from experienced developers",
        color: "from-blue-500 to-cyan-500"
      },
      { 
        icon: "⚡", 
        title: "24/7 Availability", 
        desc: "Learn anytime, anywhere at your own pace",
        color: "from-emerald-500 to-teal-500"
      }
    ].map((feature, index) => (
      <motion.div
  key={feature.title}
  className="group relative overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
  whileHover={{ 
    scale: 1.04,
    y: -4
  }}
>
  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
  <div className="relative z-10">
    <div className="text-3xl mb-3">{feature.icon}</div>
    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">
      {feature.title}
    </h4>
    <p className="text-xs text-gray-600 dark:text-gray-300">
      {feature.desc}
    </p>
  </div>
</motion.div>

    ))}
  </div>
</motion.div>


        </div>
      </main>

      {/* Chat Modal */}
      <ChatModal
        isOpen={selectedPersona !== null}
        onClose={handleCloseModal}
        personaName={selectedPersona || ""}
        personaAvatar={selectedPersonaData?.avatar}
      />

      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  )
}