
import React from 'react'
import { Link } from 'react-router-dom'

function LearnMore() {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Learn More About Our AI Resume Builder
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
          Discover how our AI-powered platform helps you create professional,
          customized resumes that stand out.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our AI Resume Builder simplifies the process of crafting
              high-quality resumes. Whether you're a student, a professional,
              or a freelancer, we offer tailored solutions to showcase your
              unique skills and experiences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>AI Assistance for personalized content.</li>
              <li>Customizable, professional templates.</li>
              <li>Job-specific resumes tailored to roles.</li>
              <li>Intuitive, user-friendly interface.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Input your personal, educational, and professional details.</li>
              <li>Choose a template from our wide selection.</li>
              <li>Use AI suggestions to optimize content.</li>
              <li>Download or share your resume in seconds.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Get Started Today!
            </h2>
            <p className="text-gray-600">
              Take the first step toward creating a standout resume. Let our AI
              resume builder do the hard work for you.
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-center">
        <Link
                    to={"/dashboard"}
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:scale-[102%] transition-all cursor-pointer"
                  >
                  Start Building Your Resume
                  </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LearnMore