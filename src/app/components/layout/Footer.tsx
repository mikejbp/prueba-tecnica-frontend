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
    <footer className="text-white py-12 px-10 md:px-24 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-red-light"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-x-6">
        {columns.map((col, i) => (
          <div key={i}>
            <h6 className="text-menu font-segoe font-bold text-orangeYellow-dark">{col.title || '\u00A0'}</h6>
            <ul className="text-menu font-segoe mt-2">
              {col.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {col.isNewsletter && (
              <div className="mt-2 relative">
                <input type="email" placeholder="Email Address" className="p-4 text-gray bg-white rounded-full" />
                <div className="bg-red-light shadow-sm shadow-red-light rounded-full h-12 p-3 ml-2 absolute right-52 bottom-0 top-1">
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
