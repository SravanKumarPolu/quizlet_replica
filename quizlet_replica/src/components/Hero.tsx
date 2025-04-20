
import FlashcardPreview from "./FlashcardPreview";

const Hero = () => {
  return (
    <section className="bg-base-200 text-center px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Study smarter, not harder</h1>
      <p className="text-lg mb-6">Unlock your potential with Quizlet's learning tools.</p>
      <button className="btn btn-primary mb-10">Get Started</button>
      <div className="flex justify-center">
        <FlashcardPreview />
      </div>
    </section>
  );
};

export default Hero;