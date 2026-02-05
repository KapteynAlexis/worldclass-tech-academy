// src/components/Impact.tsx
import Image from "next/image";
export default function Impact() {
  return (
    <section className="bg-[#ffffff] p-16 flex flex-col items-center gap-4 justify-center">
                    <Image src="/images/hero-image.png" alt="Worldclass Tech Academy" width={500} height={500}/>

        <div className="flex flex-col sm:flex-row justify-center py-12 px-6 gap-8 bg-[#040440]  text-white rounded-full">
            <div className="text-center">
                <h2 className="text-4xl font-bold">4</h2>
                <p className="mt-2 text-lg">Professional Tech Courses</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">96%</h2>
                <p className="mt-2 text-lg">Student Satisfaction Rate</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">3,000+</h2>
                <p className="mt-2 text-lg">Learners Trained Online</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">93%</h2>
                <p className="mt-2 text-lg">Course Completion Rate</p>
            </div>
        </div>
      
    </section>
  )
}
