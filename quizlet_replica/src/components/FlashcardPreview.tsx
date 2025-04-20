import  { useState } from "react";

const FlashcardPreview = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-white flex items-center justify-center border rounded-lg shadow-md backface-hidden">
          <p className="text-lg font-semibold">What is the capital of France?</p>
        </div>
        <div className="absolute w-full h-full bg-blue-100 flex items-center justify-center border rounded-lg shadow-md rotate-y-180 backface-hidden">
          <p className="text-lg font-semibold">Paris</p>
        </div>
      </div>
    </div>
  );
};

export default FlashcardPreview;
