import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const courses = [
  {
    title: "Frontend Development",
    slug: "frontend",
    description:
      "Build modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and modern tools.",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Learn cybersecurity fundamentals, ethical hacking basics, and system protection techniques.",
  },
  {
    title: "Data Analysis",
    slug: "data-analysis",
    description:
      "Analyze and visualize data using Excel, SQL, Python, and modern analytics tools.",
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    description:
      "Develop professional communication skills for remote and customer-facing roles.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="container py-20 px-20">
        <h1 className="mb-4 text-4xl">Our Online Courses</h1>
        <p className="max-w-2xl mb-12">
          Our programs are designed to meet current industry demands and prepare
          you for real-world opportunities in tech.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="border rounded-xl p-6 hover:shadow-md transition hover:bg-[#FF4400]"
            >
              <h3 className="mb-2">{course.title}</h3>
              <p>{course.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
