function Topbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-gradient-to-r from-black via-gray-800 to-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-white"
        >
          MyPortfolio
        </a>

       
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
