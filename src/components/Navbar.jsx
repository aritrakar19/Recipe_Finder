const Navbar = () => {
    return (
      <nav className="bg-blue-500 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Food Recipe Finder</h1>
          <ul className="flex space-x-6">
            <li className="text-white hover:text-gray-200 cursor-pointer">Home</li>
            <li className="text-white hover:text-gray-200 cursor-pointer">About</li>
            <li className="text-white hover:text-gray-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  