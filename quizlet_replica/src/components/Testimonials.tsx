

const Testimonials = () => {
  return (
    <section className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

      {/* Section 1 - Prepare for Tests */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-gray-900 mb-4 leading-tight">
            Prepare for tests on any subject
          </h2>
          <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
            Memorise anything with personalised practice tests and revision sessions in Learn.
            98% of students say Quizlet has improved their comprehension.
          </p>
          <button className="bg-[#3f51ff] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-[14px] transition">
            Get started
          </button>
        </div>
        <div>
          <img
            src="https://images.prismic.io/quizlet-web/ZuNicbVsGrYSvUQK_EN-GB3Learn.png?auto=format,compress"
            alt="Prepare for tests"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Section 2 - Empower Teachers */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 bg-[#e5e8fd] p-8 rounded-xl">
        <div>
          <p className="text-sm font-semibold text-gray-700 uppercase mb-1 tracking-wide">Teachers</p>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-gray-900 mb-4 leading-tight">
            Empower your students
          </h2>
          <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
            Help every student learn anything with confidence. With free flashcard sets,
            study modes and in-class games like Quizlet Live, you can create a more
            engaged classroom instantly.
          </p>
          <div className="space-y-3">
            <button className="bg-[#3f51ff] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-[14px] transition">
              Sign up as a teacher
            </button>
            <div>
              <a href="#" className="text-[#3f51ff] text-sm font-medium hover:underline">
                See how teachers use Quizlet
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.prismic.io/quizlet-web/ZpFqjB5LeNNTxHvk_teacher-image-LOH.png?auto=format,compress"
            alt="Empower your students"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

    </div>
  </section>
  );
};

export default Testimonials;