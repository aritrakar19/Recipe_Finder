const HeroSection = () => {
    return (
      <div className="bg-cover bg-center h-64 flex items-center justify-center text-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?food')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-white text-4xl font-bold">Discover Delicious Recipes</h1>
          <p className="text-gray-200 mt-2">Find the perfect recipe for any occasion.</p>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  