
const flashcards = [
  {
    title: "Christmas Carol Quotes & Analysis",
    terms: "25 terms",
    user: "calvinchen0205",
    image:'https://assets.quizlet.com/static/i/animals/123.e5f0bd4b49e7c12.jpg'
  },
  {
    title: "LECTURE 3: Principal Asset Classes",
    terms: "39 terms",
    user: "Hfcgygfran2k",
    image: "https://up.quizlet.com/2bjq98-theNS-96s.jpg",
  },
  {
    title: "Edexcel GCSE 9-1 Business 3 markers - sa...",
    terms: "53 terms",
    user: "kjet06",
    image:'https://assets.quizlet.com/static/i/animals/107.c3e123902d831a9.jpg'
  },
  {
    title: "L2W Cabernet Sauvignon",
    terms: "31 terms",
    user: "paterson_bh123",
    image:'https://assets.quizlet.com/static/i/animals/125.a46eeeaa1617163.jpg'
  },
  {
    title: "Spanish Vocabulary",
    terms: "1,990 terms",
    user: "uni_sheen",
        image:'https://assets.quizlet.com/static/i/animals/123.e5f0bd4b49e7c12.jpg'
  },
  {
    title: "Ghost of Christmas past light up hub",
    terms: "10 terms",
    user: "jesshufton",
    image:'https://up.quizlet.com/35zkr0-Eaq3S-96s.png'
  },
];
const CTA = () => {
  return (
    <section className="bg-[#f6f7fb] text-center py-16 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-10">Popular flashcard sets</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {flashcards.map((card, index) => (
          <div key={index} className="bg-white gap-8 rounded-xl shadow-sm p-4 text-left">
           <div className=" flex flex-col py-6 text-left gap-1">
           <h3 className="text-sm font-semibold mb-2 text-gray-900">{card.title}</h3>
            <span className="inline-block w-22 text-xs bg-gray-100 text-indigo-700 px-2 py-0.5 rounded-full mb-2">
              {card.terms}
            </span>
           </div>
            <span className="flex gap-2">
           <img className="w-4 rounded-full" src={card.image}/>
            <p className="text-xs text-gray-600">

              @{card.user}</p>
           </span>
          </div>
          
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <button className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-lg text-gray-400 shadow-sm">
          ←
        </button>
        <span className="text-sm font-medium text-gray-600">1/5</span>
        <button className="bg-white w-8 h-8 flex items-center justify-center rounded-full text-lg text-gray-400 shadow-sm">
          →
        </button>
      </div>

      {/* Footer */}
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
          />
          <p className="text-xs mt-2">Get the app</p>
        </div>
      </footer>
    </section>
  );
};

export default CTA;