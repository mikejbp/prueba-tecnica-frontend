import { MoveRight } from 'lucide-react';

interface Column {
  title: string;
  items: string[];
  isNewsletter?: boolean;
}

export function Footer() {
  const columns: Column[] = [
    {
      title: 'About',
      items: ['Locations', 'Franchise With Us', 'Partners', 'About Us', 'Make Fetch Happen!'],
    },
    {
      title: 'Resources',
      items: ['Reviews', 'Pet Resource Center', 'Media Fact Sheet', 'Blog', 'News'],
    },
    {
      title: '',
      items: ['Gift Cards', 'Services', 'Franchisee Login', 'Terms of Use', 'Privacy Policy'],
    },
    {
      title: 'Newsletter',
      items: ['Sign up to receive the Fetch!', 'Family Newsletter'],
      isNewsletter: true,
    },
  ];

  return (
    <footer className="text-white pb-10 px-10 lg:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-red-light"></div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-10">
        {columns.map((col, i) => (
          <div key={i}>
            <h6 className="text-lg xl:text-menu font-segoe font-bold text-orangeYellow-dark">
              {col.title || '\u00A0'}
            </h6>
            <ul className="text-lg xl:text-menu font-segoe">
              {col.items.map((item, idx) => (
                <li key={idx} className="mt-2 lg:mt-5">
                  {item}
                </li>
              ))}
            </ul>
            {col.isNewsletter && (
              <div className="mt-6 absolute">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-4 text-gray bg-white rounded-full shadow-md 2xl:w-80"
                />
                <div className="bg-red-light shadow-sm shadow-red-light max-w-12 rounded-full h-12 p-3 relative bottom-[3.3rem] left-[10.8rem] 2xl:left-[16.5rem]">
                  <MoveRight />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
