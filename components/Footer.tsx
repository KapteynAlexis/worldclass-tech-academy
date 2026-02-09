// src/components/Footer.tsx
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#040440] text-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            WorldClass Tech Academy
          </h3>
          <p className="text-sm leading-relaxed">
            We help individuals and businesses build real-world tech skills
            and digital solutions that scale.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/"className="hover:text-[#FF4400]">Home</Link></li>
            <li><Link href="/courses" className="hover:text-[#FF4400]">Courses</Link></li>
            <li><Link href="/" className="hover:text-[#FF4400]">About Us</Link></li>
            <li><Link href="https://wa.me/2349067441498" className="hover:text-[#FF4400]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Frontend Development</li>
            <li>Cybersecurity</li>
            <li>Data Analysis</li>
            <li>Customer Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@worldclasstech.academy</li>
            <li>Phone: +2349067441498</li>
            <li>Location: Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} WorldClass Tech Academy. All rights reserved.
      </div>
    </footer>
  )
}
