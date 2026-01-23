// src/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Worldclass Tech Academy"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#040440]/70" />

      {/* Content */}
      <div className="relative z-10 container text-white max-w-3xl text-center">
        <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
          WorldClass Tech Academy
        </h1>

        <p className="mb-8 text-lg text-gray-200">
          Build future-ready tech skills online with expert guidance,
          real projects, and a supportive learning community.
        </p>

        <div className="flex flex-col sm:flex-row gap-12 justify-center">
          <Link href="/courses" className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">
                   Explore Courses
                  </Link>
          <a className="px-8 py-4 rounded-md bg-[#FF4400] text-white font-semibold hover:opacity-90 transition  hover:bg-white hover:text-[#FF4400]">
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
