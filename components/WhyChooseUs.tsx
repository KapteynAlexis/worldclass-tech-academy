// src/components/WhyChooseUs.tsx

const reasons = [
  {
    title: 'Modern Technologies',
    description:
      'We use up-to-date tools and technologies to build solutions that are reliable, scalable, and future-ready.',
  },
  {
    title: 'Performance-Focused Builds',
    description:
      'Our focus is on speed, responsiveness, and clean code to ensure optimal user experience.',
  },
  {
    title: 'Clear Communication',
    description:
      'We believe in transparency and consistent communication throughout every stage of the project.',
  },
  {
    title: 'Tailored Solutions',
    description:
      'Every solution is designed around your specific goals, not one-size-fits-all templates.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose WorldClass Tech Academy
          </h2>
          <p className="text-gray-600">
            We combine technical expertise with a structured approach to deliver
            solutions you can trust.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
