import { Card, CardContent } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper.jsx";
import { motion } from "framer-motion";
import React from "react";
import kingslogo from './assets/logos/kings_logo.svg.png';
import btglogo from '/src/assets/logos/btg_logo.svg.png';
import platanoslogo from '/src/assets/logos/platanos_college_logo.svg.png';

export default function Education() {
  const educationData = [
    {
      name: 'King\'s College London',
      years: '2022 - 2026',
      description: 'MSci Computer Science (Artificial Intelligence).',
      achievements: 'Achievements: First Class Honours across all 3 years. First Class Honours in Final Year Dissertation, 96% in 2nd Year Module. Professional Skills for a Globalised World Award.',
      logo: kingslogo,
    },
    {
      name: 'Bishop Thomas Grant Catholic Secondary School',
      years: '2020 - 2022',
      description: 'Obtained 3 A*\s in A-Level Mathematics, Computer Science, and Portuguese and an A in Economics.',
      achievements: 'Achievements: Awarded Highest Achiever in Economics for the Years 2020-2022.',
      logo: btglogo,
    },
    {
      name: 'Platanos College',
      years: '2015 - 2020',
      description: 'Obtained 12 GCSEs including Mathematics, Further Mathematics, and Computer Science.',
      achievements: 'Achievements: 9 GCSE\'s at Grade 9, 3 at Grade 8. Columnist in the School Newsletter.',
      logo: platanoslogo,
    },
  ];

  return (
    <PageWrapper title="Education">
    <div className="flex flex-col gap-6">
    {educationData.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
      >
        <Card key={index} className="p-6 shadow-md rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center text-center">
        <img src={edu.logo} alt={`${edu.name} logo`} className="w-50 h-50 mb-4 object-contain" />
        <h2 className="text-xl font-semibold mb-1">{edu.name}</h2>
        <p className="text-gray-500 dark:text-gray-300 mb-2">{edu.years}</p>
        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{edu.description}</p>
        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{edu.achievements}</p>
        </Card>
        </motion.div>
    ))}

    </div>

    </PageWrapper>
  );
}
