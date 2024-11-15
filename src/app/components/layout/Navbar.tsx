import { Menu, MoveUp, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSectionStore } from '../../../store/store';

interface MenuItems {
  id: number;
  name: string;
  link: string;
}

export function Navbar() {
  const { setActiveSection } = useSectionStore();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems: MenuItems[] = [
    { id: 1, name: 'Location', link: 'location' },
    { id: 2, name: 'Blog', link: 'blog' },
    { id: 3, name: 'About Us', link: 'about' },
    { id: 4, name: 'Services', link: 'services' },
    { id: 5, name: 'Franchise with Us', link: 'contact' },
  ];

  const handleOpenMenu = () => setOpenSidebar(!openSidebar);

  /**
   * Handles the activation of a section by setting it as the active section
   * and scrolling it into view smoothly.
   * @param section - The ID of the section to activate and scroll into view.
   */
  const handleSectionActive = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="bg-red-light xl:bg-transparent px-10 md:px-24 py-4">
        <nav className="mx-auto flex justify-between items-center">
          <div className="flex-shrink-0 rounded-full bg-white px-3 py-2">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </div>
          <ul className="hidden md:flex gap-x-6 font-openSans font-normal text-lg lg:text-menu">
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => handleSectionActive(item.link)}>
                <a href={`#${item.link}`} className="text-white animated-underline">
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
            className={`fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity duration-300 ${
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
                  <li key={item.id} className="py-2" onClick={() => handleSectionActive(item.link)}>
                    <a href={`#${item.link}`} className="text-white animated-underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {showScrollTopButton && (
        <button
          onClick={handleScrollTop}
          className="fixed z-50 bottom-4 right-4 bg-red-light text-white p-3 rounded-full shadow-lg cursor-pointer"
        >
          <MoveUp size={20} />
        </button>
      )}
    </>
  );
}
