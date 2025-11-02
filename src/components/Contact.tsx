'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <div className="space-y-6">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
            >
              <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <HiMail className="text-2xl text-primary" />
              </div>
              <div>
                <p className="font-semibold dark:text-white">Email</p>
                <p className="text-gray-600 dark:text-gray-400">{portfolioData.personal.email}</p>
              </div>
            </a>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors group"
            >
              <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <HiPhone className="text-2xl text-primary" />
              </div>
              <div>
                <p className="font-semibold dark:text-white">Téléphone</p>
                <p className="text-gray-600 dark:text-gray-400">{portfolioData.personal.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
                <HiLocationMarker className="text-2xl text-primary" />
              </div>
              <div>
                <p className="font-semibold dark:text-white">Localisation</p>
                <p className="text-gray-600 dark:text-gray-400">{portfolioData.personal.location}</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

