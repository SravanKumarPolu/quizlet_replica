// Features.tsx


const Features = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-16 items-center justify-center">
      <div className="max-w-[1024px] mx-auto space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-gray-900 leading-tight mb-4">
              Every class, every test, one<br />ultimate study app
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              Create your own flashcards or find sets made by teachers, students and experts.
              Study them anytime, anywhere with our free app.
            </p>
            <div className="flex gap-4 mt-4">
              <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" className="h-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
            </div>
          </div>
          <div>
            <img src="https://images.prismic.io/quizlet-web/ZuNiTbVsGrYSvUQH_EN-GB1Flashcards.png?auto=format,compress" alt="App Preview" className="w-full h-auto object-contain rounded-xl shadow-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <img src="https://images.prismic.io/quizlet-web/ZuNiXrVsGrYSvUQJ_EN-GB1MagicNotes.png?auto=format,compress" alt="Study Guide" className="w-full h-auto object-contain rounded-xl shadow-md" />
          </div>
          <div>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-gray-900 leading-tight mb-4">
              Make studying class material<br />quick and easy
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
              Turn your slides, videos and notes into flashcard sets, practice tests and study guides.
            </p>
            <button className="bg-[#3f51ff] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-[14px] transition">
              Try it out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;