import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#040440]">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 px-6">
          <Image
            src="/images/logo-full.png"
            alt="Worldclass Tech Academy"
            width={80}
            height={20}
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#FF4400] hover:bg-white p-4 rounded-md font-bold">Home</Link>
          <Link href="/courses" className="hover:text-[#FF4400] hover:bg-white p-4 rounded-md font-bold">Courses</Link>
          <Link href="#contact" className="hover:text-[#FF4400] hover:bg-white p-4 rounded-md font-bold">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
