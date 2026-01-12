// src/components/OurProcess.tsx

const steps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'We start by understanding your goals, audience, and expectations to create a clear project roadmap.',
  },
  {
    step: '02',
    title: 'Design & Development',
    description:
      'We design and build your solution using modern tools, ensuring functionality, performance, and usability.',
  },
  {
    step: '03',
    title: 'Review & Refinement',
    description:
      'You review the work, and we refine based on feedback to ensure everything aligns with your vision.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'After final approval, we deploy the project and provide support to ensure a smooth launch.',
  },
]

export default function OurProcess() {
  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-gray-600">
            A structured approach that ensures clarity, efficiency, and results
            from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-8"
            >
              <span className="text-sm font-semibold text-[#FF4400]">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
