// File: src/components/Hero.tsx
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#f6f7fb] text-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[40px] font-extrabold text-gray-900 leading-tight mb-3">
          How do you want to study?
        </h1>
        <p className="text-[16px] text-gray-700 leading-normal max-w-xl mx-auto mb-6 font-normal">
          Master whatever you're learning with Quizlet’s interactive flashcards, practice tests and study activities.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold text-[14px] mb-2 transition">
          Sign up for free
        </button>
        <div>
          <button className="text-blue-600 text-[14px] underline font-medium">I'm a teacher</button>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-16 relative w-full">
        {/* Left Arrow */}
        <button className="absolute -left-4 top-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition">
          <FaChevronLeft />
        </button>

        {/* Scrollable Card Container */}
        <div className="flex  gap-6 px-6 py-2 mx-auto min-w-[768px] max-w-[1240px] overflow-x-auto scroll-smooth">
          {/* Learn */}
          <div className="min-w-[260px]  bg-[#b9ecf8] rounded-[28px] p-6 text-left flex flex-col justify-between shadow-sm min-h-[360px] transition-transform duration-300 hover:scale-105">
            <h3 className="text-[18px] font-extrabold text-black mb-4 text-center">Learn</h3>
            <div className="bg-white rounded-[20px] p-4 shadow-inner text-center ">
             
              <img
                src="https://images.prismic.io/quizlet-web/ZpFubx5LeNNTxHxg_4Learn%402x.png?auto=format,compress"
                alt="Learn"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>

          {/* Study Guides */}
          <div className="min-w-[260px] bg-[#ebbbf0] rounded-[28px] p-6 text-left flex flex-col justify-between shadow-sm min-h-[360px] transition-transform duration-300 hover:scale-105">
            <h3 className="text-[18px] font-extrabold text-black mb-4 text-center relative">
              Study Guides
           
            </h3>
            <div className="bg-white rounded-[20px] p-4 shadow-inner text-sm text-center">
              <img
                src="https://images.prismic.io/quizlet-web/ZpFuOB5LeNNTxHxU_1SG%402x.png?auto=format,compress"
                alt="study guides"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>

          {/* Flashcards */}
          <div className="min-w-[260px] bg-[#5044e5] text-white rounded-[28px] p-6 text-left flex flex-col justify-between shadow-sm min-h-[360px] transition-transform duration-300 hover:scale-105">
            <h3 className="text-[18px] font-extrabold text-white mb-4 text-center">Flashcards</h3>
            <div className="bg-white text-gray-900 rounded-[20px] p-6 shadow-md text-center">
              <img
                src="https://images.prismic.io/quizlet-web/ZpFuUR5LeNNTxHxc_2Flashcards%402x.png?auto=format,compress"
                alt="flashcards"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>

          {/* Practice Tests */}
          <div className="min-w-[260px] bg-[#fcd0a1] rounded-[28px] p-6 text-left flex flex-col justify-between shadow-sm min-h-[360px] transition-transform duration-300 hover:scale-105">
            <h3 className="text-[18px] font-extrabold text-black mb-4 text-center">Practice Tests</h3>
            <div className="bg-white rounded-[20px] p-4 shadow-inner text-sm text-center">
              <img
                src="https://images.prismic.io/quizlet-web/ZpFuYB5LeNNTxHxd_3PracticeTests%402x.png?auto=format,compress"
                alt="practice tests"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute -right-4 top-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
