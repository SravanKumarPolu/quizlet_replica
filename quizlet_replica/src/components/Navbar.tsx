

const Navbar = () => {
  return (
    <nav className="bg-base-100 px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold text-primary">Quizlet</div>
      <div className="hidden sm:flex gap-6 text-sm">
        <a href="#" className="hover:text-primary">Home</a>
        <a href="#" className="hover:text-primary">Features</a>
        <a href="#" className="hover:text-primary">Pricing</a>
        <a href="#" className="hover:text-primary">Log in</a>
        <button className="btn btn-primary btn-sm">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;