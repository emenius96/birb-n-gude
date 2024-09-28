export default function About() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center min-h-full py-10 p-16">
      <div className="md:w-1/2 md:mr-8">
        <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
        <p className="text-xl mb-6 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src= "/images/bng.jpg" 
          alt="About Us"
          className="w-100 h-100 rounded-full object-cover" 
        />
      </div>
    </div>
  );
}
