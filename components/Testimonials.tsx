export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
        <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
            <p className="mb-12 text-gray-600">
                What our online students say
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                {
                    quote:
                    "Worldclass Tech Academy made learning tech easy and flexible. I was able to learn online while working full-time, and the projects really helped me grow.",
                    name: "Samuel A.",
                },
                {
                    quote:
                    "The online classes are well structured and very practical. I gained confidence and built a solid portfolio within months.",
                    name: "Aisha K.",
                },
                {
                    quote:
                    "Great instructors, clear lessons, and constant support. I highly recommend Worldclass Tech Academy to anyone serious about tech.",
                    name: "Daniel O.",
                },
                {
                    quote:
                    "The flexible learning options made it possible to study while working. I gained real skills and started freelancing within months!",
                    name: "Emeka O.",
                },
                {
                    quote:
                    "Amazing environment and practical lessons. I now work as a web developer and still refer friends here.",
                    name: "Tayo M.",
                },
                ].map((item, index) => (
                <div
                    key={index}
                    className="border rounded-xl p-6 bg-white"
                >
                    <p className="mb-4 text-gray-700 italic">
                    “{item.quote}”
                    </p>
                    <span className="font-medium text-sm">
                    — {item.name}
                    </span>
                </div>
                ))}
            </div>
        </div>  
    </section>
  );
}
