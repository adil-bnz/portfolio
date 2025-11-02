'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'

export default function Skills() {
  const skillCategories = [
    { title: 'Langages de Programmation', items: portfolioData.skills.languages },
    { title: 'Frameworks & Bibliothèques', items: portfolioData.skills.frameworks },
    { title: 'Bases de Données', items: portfolioData.skills.databases },
    { title: 'Outils & Concepts', items: portfolioData.skills.tools },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Compétences
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (index * 0.05) }}
                    className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Langues
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.skills.languages_spoken.map((lang, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-gray-900">{lang.name}</p>
                <p className="text-sm text-gray-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

