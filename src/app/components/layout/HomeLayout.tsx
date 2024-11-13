import { Footer, Navbar } from '.';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      {children}
      <div className="bg-red-light pt-12 px-10 md:px-24 lg:rounded-t-[30%_20%]">
        <Footer />
      </div>
    </div>
  );
}
