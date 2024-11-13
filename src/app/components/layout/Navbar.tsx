export function Navbar() {
  return (
    <header className="flex flex-row bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        </div>

        <ul className="hidden md:flex flex-row space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
