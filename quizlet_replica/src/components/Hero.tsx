// File: src/components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f6f7fb] text-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          How do you want to study?
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Master whatever you're learning with Quizlet's interactive flashcards, practice tests
          and study activities.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm mb-2">
          Sign up for free
        </button>
        <div>
          <button className="text-blue-600 text-sm underline">I'm a teacher</button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        <div className="bg-[#b9ecf8] rounded-2xl p-6 text-left">
          <h3 className="text-lg font-bold mb-2">Learn</h3>
          <div className="bg-white rounded-xl p-4 shadow-inner">
            <p className="text-sm">la pintura</p>
            <input
              type="text"
              placeholder="Type the answer"
              className="mt-2 px-3 py-2 w-full text-sm border rounded-md focus:outline-none"
            />
          </div>
        </div>

        <div className="bg-[#ebbbf0] rounded-2xl p-6 text-left">
          <h3 className="text-lg font-bold mb-2">Study Guides</h3>
          <div className="bg-white rounded-xl p-4 shadow-inner text-sm">
            <p className="font-semibold">Greek art</p>
            <div className="text-xs mt-2 text-gray-600">
              <p>Outline | Quick reference</p>
              <ul className="mt-2 space-y-1">
                <li>• Dark Age of Greece</li>
                <li>• Collapse of Mycenaean palaces</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#5044e5] text-white rounded-2xl p-6 text-left">
          <h3 className="text-lg font-bold mb-4">Flashcards</h3>
          <div className="bg-white text-gray-900 rounded-lg p-6 shadow-md">
            <p className="text-sm font-medium">superior</p>
            <p className="font-semibold text-base">vena cava</p>
          </div>
        </div>

        <div className="bg-[#fcd0a1] rounded-2xl p-6 text-left">
          <h3 className="text-lg font-bold mb-2">Practice Tests</h3>
          <div className="bg-white rounded-xl p-4 shadow-inner text-sm">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>Score 84%</span>
              <span>Results 76/90</span>
              <span>Total time 70m</span>
            </div>
            <ul className="space-y-1">
              <li>A. ❌</li>
              <li>B.</li>
              <li>C. ✅</li>
              <li>D.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
