// src/components/Services.tsx
import Image from "next/image";
import Link from "next/link";
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
  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-gray-600">
            We offer a range of digital services focused on building high-quality
            solutions and empowering individuals with relevant tech skills.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition"
            >
              {service.image && <Image src={service.image} alt={service.title} width={400} height={200} className="mb-4 rounded-md"/>}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
          
        </div>
        <div className="flex items-center justify-center p-4">
              <Link href="/courses" className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">
                             Explore Courses
              </Link>
          </div>
      </div>
    </section>
  )
}
