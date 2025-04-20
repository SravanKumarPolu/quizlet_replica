

const features = [
  { title: "Flashcards", desc: "Create and study your own flashcards." },
  { title: "Learn Mode", desc: "Use AI-assisted repetition to retain information." },
  { title: "Practice Tests", desc: "Test yourself with custom quizzes." }
];

const Features = () => {
  return (
    <section className="px-6 py-16 bg-base-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((item) => (
          <div key={item.title} className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-base-content/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;