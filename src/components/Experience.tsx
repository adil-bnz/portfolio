'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Expériences
        </motion.h2>
        <div className="space-y-8">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <HiBriefcase className="text-3xl text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <HiLocationMarker />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiCalendar />
                      <span>{exp.period}</span>
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

