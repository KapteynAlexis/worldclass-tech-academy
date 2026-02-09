// src/components/About.tsx
import Image from "next/image";
export default function About() {
  return (
    <section className="py-20 px-6 bg-white text-black">
      

        <div className="flex flex-col sm:flex-row gap-8 max-w-6xl mx-auto justify-between">
             <div className="mb-8 sm:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold">About World Class Tech Academy</h2>
                <p className="text-gray-600">World Class Tech Academy is an online technology education platform committed to training individuals for success in today’s digital economy. We provide structured, practical, and career-focused tech education that equips learners with skills they can immediately apply.
                  Our online learning model is designed for flexibility and effectiveness — allowing students to learn from anywhere while still receiving expert instruction, mentorship, and hands-on project experience.
                  Whether you are starting a tech career, upgrading your skills, or transitioning into a new field, Worldclass Tech Academy provides the tools and support you need to grow confidently in tech.
                </p>
            </div>
            
        </div>
            <div className="flex justify-center pt-8 px-4">
              <Image 
                src="/images/about-img2.png" 
                alt="Worldclass Tech Academy" 
                width={500} 
                height={500} 
                className="w-full max-w-2xl h-auto"
              />
            </div>      
    </section>
  )
}
