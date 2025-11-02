'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Formation
        </motion.h2>
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <HiAcademicCap className="text-3xl text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-2">
                    {edu.degree}
                  </p>
                  {edu.details && (
                    <p className="text-gray-600 mb-3">{edu.details}</p>
                  )}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <HiLocationMarker />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiCalendar />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

