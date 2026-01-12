// src/components/Footer.tsx

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
            <li><a href="#services" className="hover:text-[#FF4400]">Services</a></li>
            <li><a href="#process" className="hover:text-[#FF4400]">Our Process</a></li>
            <li><a href="#why-us" className="hover:text-[#FF4400]">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-[#FF4400]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Tech Training</li>
            <li>UI / UX Design</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@worldclasstech.academy</li>
            <li>Phone: +234 XXX XXX XXXX</li>
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
