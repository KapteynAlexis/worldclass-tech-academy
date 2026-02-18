'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: 'Frontend Development',
    description:
      'Build modern, responsive, and user-friendly websites with Worldclass Tech Academy’s Frontend Development Masterclass.',
  image:"/images/frontend.png",
    },
  {
    title: 'Cybersecurity Masterclass',
    description:
      'A structured online training program designed to take you from foundational concepts to job-ready cybersecurity skills',
  image:"/images/cybersecurity.png",
    },
  {
    title: 'Data Analysis',
    description:
      'Turn data into actionable insights with Worldclass Tech Academy’s Data Analysis Masterclass',
  image:"/images/data-analysis.png",
    },
  {
    title: 'Customer Service',
    description:
      'Build strong communication skills and deliver exceptional customer experiences with Worldclass Tech Academy’s Customer Service Masterclass.',
  image:"/images/customer-service.png",
    },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 max-w-2xl"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-gray-600">
            We offer a range of digital services focused on building high-quality
            solutions and empowering individuals with relevant tech skills.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {service.image && <Image src={service.image} alt={service.title} width={400} height={200} className="mb-4 rounded-md"/>}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </motion.div>
          ))}
          
        </motion.div>
        <motion.div
          className="flex items-center justify-center p-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
              <Link href="/courses" className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">
                             Explore Courses
              </Link>
          </motion.div>
      </div>
    </section>
  )
}
