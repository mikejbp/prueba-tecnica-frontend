import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface MenuItems {
  id: number;
  name: string;
  link: string;
}

export function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const menuItems: MenuItems[] = [
    { id: 1, name: 'Location', link: '#location' },
    { id: 2, name: 'Blog', link: '#blog' },
    { id: 3, name: 'About Us', link: '#about' },
    { id: 4, name: 'Services', link: '#services' },
    { id: 5, name: 'Franchise with Us', link: '#contact' },
  ];

  const handleOpenMenu = () => setOpenSidebar(!openSidebar);

  return (
    <header className="bg-red-light xl:bg-transparent px-10 md:px-24 py-4">
      <nav className="mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 rounded-full bg-white px-3 py-2">
          <img src="/logo.svg" alt="Logo" className="h-10" />
        </div>
        <ul className="hidden md:flex gap-x-6 font-openSans font-normal text-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-white animated-underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none transition-transform duration-300"
            onClick={handleOpenMenu}
          >
            <div
              className={`transform transition-transform duration-300 ${
                openSidebar ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <Menu size={24} />
            </div>
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            openSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`fixed top-0 right-0 w-64 bg-red-light h-full shadow-lg transition-transform duration-300 ${
              openSidebar ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                className="text-white focus:outline-none transition-transform duration-300"
                onClick={handleOpenMenu}
              >
                <div className="transform transition-transform duration-300 rotate-180">
                  <X size={24} />
                </div>
              </button>
            </div>
            <ul className="flex flex-col p-4 font-openSans font-normal text-menu">
              {menuItems.map((item) => (
                <li key={item.id} className="py-2">
                  <a href={item.link} className="text-white animated-underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
