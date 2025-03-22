const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 py-4 shadow-md">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Fitness AI
          </span>{" "}
          - Your AI Fitness Tutor
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
