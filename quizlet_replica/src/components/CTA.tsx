import { useState } from "react";

// CTA.tsx
const allFlashcards = [
  {
    title: "Christmas Carol Quotes & Analysis",
    terms: "25 terms",
    user: "calvinchen0205",
    image: "https://assets.quizlet.com/static/i/animals/123.e5f0bd4b49e7c12.jpg"
  },
  {
    title: "LECTURE 3: Principal Asset Classes",
    terms: "39 terms",
    user: "Hfcgygfran2k",
    image: "https://up.quizlet.com/2bjq98-theNS-96s.jpg"
  },
  {
    title: "Edexcel GCSE 9-1 Business 3 markers - sa...",
    terms: "53 terms",
    user: "kjet06",
    image: "https://assets.quizlet.com/static/i/animals/107.c3e123902d831a9.jpg"
  },
  {
    title: "L2W Cabernet Sauvignon",
    terms: "31 terms",
    user: "paterson_bh123",
    image: "https://assets.quizlet.com/static/i/animals/125.a46eeeaa1617163.jpg"
  },
  {
    title: "Spanish Vocabulary",
    terms: "1,990 terms",
    user: "uni_sheen",
    image: "https://assets.quizlet.com/static/i/animals/123.e5f0bd4b49e7c12.jpg"
  },

  {
    title: "Biology Cell Structure",
    terms: "42 terms",
    user: "bio_guru",
    image: "https://www.bnf.fr/sites/default/files/2019-10/btv1b8457904c_f1.jpg"
  },
  {
    title: "Shakespeare Themes",
    terms: "30 terms",
    user: "litlover99",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "JavaScript Basics",
    terms: "60 terms",
    user: "devwizard",
    image: "https://media.istockphoto.com/id/1399246824/photo/digital-eye-wave-lines-stock-background.jpg?s=612x612&w=0&k=20&c=1cW5xuLcb6HPDj6CLQQFBvGK5_fJvx9eA2egik-3hAc="
  }
,  
  {
    title: "French Verbs Conjugation",
    terms: "75 terms",
    user: "lingua_master",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
  },
 
  {
    title: "Geography: Rivers & Landforms",
    terms: "36 terms",
    user: "geo_genius",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },{
    title: "World War II Facts",
    terms: "28 terms",
    user: "historyhero",
 image: "https://www.bnf.fr/sites/default/files/2019-10/btv1b8457904c_f1.jpg"
  }
,  
 {
  title: "Ghost of Christmas past light up hub",
  terms: "10 terms",
  user: "jesshufton",
  image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=400&q=80"
}
 
];

const flashcardsPerPage = 6;

const CTA = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allFlashcards.length / flashcardsPerPage);

  const startIndex = (page - 1) * flashcardsPerPage;
  const currentFlashcards = allFlashcards.slice(startIndex, startIndex + flashcardsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };
  return (
    <section className="bg-[#f6f7fb] text-center py-16 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-10">Popular flashcard sets</h2>

      {/* Card Grid */}
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {currentFlashcards.map((card, index) => (
          <div key={index} className="bg-white gap-8 rounded-xl shadow-sm p-4 text-left">
            <div className="flex flex-col py-6 gap-1">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">{card.title}</h3>
              <span className="inline-block text-xs bg-gray-100 text-indigo-700 px-2 py-0.5 rounded-full mb-2">
                {card.terms}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <img
                className="w-5 h-5 rounded-full object-cover"
                src={card.image}
                alt={`${card.user}'s avatar`}
              />
              <span className="text-xs text-gray-600">@{card.user}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <button
          className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-lg text-gray-400 shadow-sm disabled:opacity-50"
          aria-label="Previous page"
          onClick={handlePrev}
          disabled={page === 1}
        >
          ←
        </button>
        <span className="text-sm font-medium text-gray-600">
          {page}/{totalPages}
        </span>
        <button
          className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-lg text-gray-400 shadow-sm disabled:opacity-50"
          aria-label="Next page"
          onClick={handleNext}
          disabled={page === totalPages}
        >
          →
        </button>
      </div>

  

      {/* Footer Navigation */}
      <footer className="border-t pt-10 text-left text-sm text-gray-600 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <div>
          <h4 className="font-bold text-gray-800 mb-2">About us</h4>
          <ul className="space-y-1">
            <li>About Quizlet</li>
            <li>Careers</li>
            <li>Advertise with us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">For Students</h4>
          <ul className="space-y-1">
            <li>Flashcards</li>
            <li>Test</li>
            <li>Learn</li>
            <li>Solutions</li>
            <li>Modern Learning Lab</li>
            <li>Quizlet Plus</li>
            <li>Pomodoro timer</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">For teachers</h4>
          <ul className="space-y-1">
            <li>Live</li>
            <li>Blog</li>
            <li>Quizlet Plus for teachers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Help centre</li>
            <li>Sign up</li>
            <li>Honour Code</li>
            <li>Community Guidelines</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Ad and Cookie Policy</li>
            <li>Quizlet for Schools</li>
            <li>Parents</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Language</h4>
          <p className="mb-3">English (UK)</p>
          <img
            src="https://www.svgrepo.com/show/76016/qr-code.svg"
            alt="QR code"
            className="w-24 h-24 rounded-lg shadow-sm"
            loading="lazy"
          />
          <p className="text-xs mt-2">Get the app</p>
        </div>
      </footer>
    </section>
  );
};

export default CTA;