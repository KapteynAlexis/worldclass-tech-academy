export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>

      <div className="space-y-6">
        {[
          {
            q: "Is Worldclass Tech Academy fully online?",
            a: "Yes. All our courses are 100% online, including live sessions, learning materials, and projects.",
          },
          {
            q: "Do I need prior tech experience?",
            a: "No. We offer beginner-friendly courses as well as advanced programs.",
          },
          {
            q: "Will I have access to instructors?",
            a: "Yes. Students receive instructor guidance, mentorship, and support throughout the program.",
          },
          {
            q: "Are classes live or recorded?",
            a: "We offer live sessions, recordings, and learning resources for flexible study.",
          },
          {
            q: "Do I receive a certificate?",
            a: "Yes. Upon successful completion, students receive a certificate of completion.",
          },
          {
            q: "Can I learn at my own pace?",
            a: "Absolutely. Our online structure allows you to balance learning with other commitments.",
          },
        ].map((item, index) => (
          <div key={index} className="border-b pb-4">
            <h4 className="mb-2 text-bold">{item.q}</h4>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
}
