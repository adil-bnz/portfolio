'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {portfolioData.personal.name}
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-primary mb-6"
          >
            {portfolioData.personal.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {portfolioData.personal.specialization}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <HiMail className="text-xl" />
              <span className="text-sm">{portfolioData.personal.email}</span>
            </a>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <HiPhone className="text-xl" />
              <span className="text-sm">{portfolioData.personal.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <HiLocationMarker className="text-xl" />
              <span className="text-sm">{portfolioData.personal.location}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

