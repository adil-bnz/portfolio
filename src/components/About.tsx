'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Profil
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {portfolioData.personal.profile.replace(/\*\*(.*?)\*\*/g, '$1')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

