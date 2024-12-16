"use client";

import "tailwindcss/tailwind.css";
import { signOut, useSession } from "next-auth/react";

export default function StatsComponent() {
  return (
    <section className="pt-20 md:pt-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-20 pb-10 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-orange-500">
            Refer and Earn $
          </h1>

          <p className="text-xl lg:text-2xl mt-6 font-light">
            Get up to 80% commission for every referal you make from our premuim
            plan.
          </p>
          <p className="mt-8 md:mt-12">
            <button
              type="button"
              className="
    py-4 px-12
    bg-gradient-to-r from-blue-500 to-orange-500
    hover:from-blue-600 hover:to-orange-600
    rounded
    text-white"
            >
              Get Started
            </button>
          </p>
          <br />
          <br />
          <p className="flex flex-wrap space-x-4 space-y-4 sm:space-y-0 sm:flex-row hidden sm:block">
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300 flex-shrink-0">
              Shop
            </button>
            <button className="border-2 border-blue-300 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300 flex-shrink-0">
              Education
            </button>
            <button className="border-2 border-orange-300 text-orange-300 px-4 py-2 rounded-lg hover:bg-orange-100 transition duration-300 flex-shrink-0">
              Our Services
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100 transition duration-300 flex-shrink-0">
              Technology
            </button>
          </p>

          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>

        <div className="lg:w-1/2">
          <img className="w-[700px] h-[400px]" src="/hero.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
}
