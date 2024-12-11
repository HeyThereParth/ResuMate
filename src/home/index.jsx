import { Button } from "@/components/ui/button";
import Header from "@/components/ui/custom/Header";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const { user, isSignedIn } = useUser();
  return (
    <div>
      <Header />
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Build Smarter Resumes with AI
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-sm/relaxed text-gray-400">
              Effortlessly create professional resumes with AI-powered guidance.
              Stand out from the competition and take the next step in your
              career journey!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {isSignedIn ? (
                <div>
                  <Link
                    to={"/dashboard"}
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:scale-[102%] transition-all cursor-pointer"
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (
                <Link
                  to={"/auth/sign-in"}
                  className="block  rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:scale-[102%] transition-all cursor-pointer"
                >
                  Get Started
                </Link>
              )}
              <Link 
               to={'/learn-more'}
              className="block  rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:scale-[102%] transition-all cursor-pointer">
                Learn More
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
