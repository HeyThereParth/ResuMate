import { Button } from "@/components/ui/button";
import Header from "@/components/ui/custom/Header";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const { user, isSignedIn } = useUser();

  return (
    <div>
      <Header />
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 md:py-32 lg:flex lg:h-screen lg:items-center">
          {/* Text Section */}
          <div className="mx-auto max-w-3xl text-center lg:text-left lg:w-1/2">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
              Build Smarter Resumes with AI
            </h1>
            <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mx-auto lg:mx-0">
              Effortlessly create professional resumes with AI-powered guidance.
              Stand out from the competition and take the next step in your
              career journey!
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              {isSignedIn ? (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2  rounded border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 hover:scale-[102%] transition-all"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/auth/sign-in"
                  className="flex items-center gap-2  rounded border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 hover:scale-[102%] transition-all"
                >
                  Get Started
                </Link>
              )}
              <Link
                to="/learn-more"
                className="flex items-center gap-2 rounded border border-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:scale-[102%] transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              src="https://i.imgur.com/049bXyk.jpg" width={500} // Replace with a real image
              alt="AI Resume Builder"
              className="max-w-full h-auto rounded-lg shadow-lg "
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-green-300">AI-Powered</h3>
              <p className="mt-2 text-sm text-gray-400">
                Harness the power of AI to craft the perfect resume tailored to
                your needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-green-300">
                Custom Templates
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Choose from a variety of templates to fit your style and career
                goals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-green-300">
                Secure & Private
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Your data is safe with us. We prioritize security and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
