import React from 'react';
import { Link } from 'react-router-dom';

function LearnMore() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-extrabold text-purple-700 text-center mb-8">
          Learn More About Our AI Resume Builder
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
          Discover how our AI-powered platform helps you create professional, customized resumes that stand out.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our AI Resume Builder simplifies the process of crafting high-quality resumes. Whether you're a student, a professional, or a freelancer, we offer tailored solutions to showcase your unique skills and experiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>AI Assistance for personalized content.</li>
              <li>Customizable, professional templates.</li>
              <li>Job-specific resumes tailored to roles.</li>
              <li>Intuitive, user-friendly interface.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>Input your personal, educational, and professional details.</li>
              <li>Choose a template from our wide selection.</li>
              <li>Use AI suggestions to optimize content.</li>
              <li>Download or share your resume in seconds.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Get Started Today!
            </h2>
            <p className="text-gray-700">
              Take the first step toward creating a standout resume. Let our AI resume builder do the hard work for you.
            </p>
          </section>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Start Building Your Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
