
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import "./index.css";

const App = () => {
  return (
    <div className="font-sans text-base-content">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default App;