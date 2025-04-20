

const Testimonials = () => {
  return (
    <section className="bg-base-200 px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <blockquote className="p-6 bg-white rounded-lg shadow">
          "Quizlet helped me pass my finals!"<br />
          <span className="text-sm text-base-content/60">– Alex M.</span>
        </blockquote>
        <blockquote className="p-6 bg-white rounded-lg shadow">
          "I love the flashcards feature. Super helpful!"<br />
          <span className="text-sm text-base-content/60">– Priya R.</span>
        </blockquote>
        <blockquote className="p-6 bg-white rounded-lg shadow">
          "A must-have tool for students."<br />
          <span className="text-sm text-base-content/60">– Daniel K.</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;