import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function CybersecurityCoursePage() {
  return (
    <>
      <section className="container py-16 md:py-20 px-6 md:px-10 max-w-4xl">
        <Link href="/courses" className="text-sm hover:underline bg-[#FF4400] text-white font-semibold hover:opacity-90 transition p-4 rounded-md">
          ← Back to Courses
        </Link>

        <h1 className="mt-6 mb-4 text-4xl">Cybersecurity Masterclass</h1>
        <p className="mb-8 text-gray-600">
          Beginner to Advanced · 100% Online
        </p>

        <p className="mb-10">
          Protect digital systems and combat cyber threats with Worldclass Tech
          Academy’s Cybersecurity Masterclass — a structured online training
          program designed to take you from foundational concepts to job-ready
          cybersecurity skills in just 12 weeks.
        </p>

        <h2 className="mb-4">Program Highlights</h2>
        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>Duration: 12 Weeks</li>
          <li>Schedule: Weekdays & Weekends</li>
          <li>Format: 100% Online</li>
          <li>Learning Mode: Live Classes + Recorded Sessions</li>
          <li>
            Outcome: Practical labs, security fundamentals & job-ready skills
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-outline">Download Brochure</button>
          <a
            href="https://wa.me/2349067441498"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Talk to a Program Advisor
          </a>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
