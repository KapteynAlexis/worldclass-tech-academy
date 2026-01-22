// src/components/Services.tsx

const services = [
  {
    title: 'Frontend Development',
    description:
      'Build modern, responsive, and user-friendly websites with Worldclass Tech Academy’s Frontend Development Masterclass.',
  },
  {
    title: 'Cybersecurity Masterclass',
    description:
      'A structured online training program designed to take you from foundational concepts to job-ready cybersecurity skills',
  },
  {
    title: 'UI / UX Design',
    description:
      'Clean, intuitive interfaces focused on delivering great user experiences across all devices.',
  },
  {
    title: 'Tech Training & Mentorship',
    description:
      'Practical tech training and mentorship designed to prepare you for real-world industry challenges.',
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
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
