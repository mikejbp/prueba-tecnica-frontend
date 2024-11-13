import { Footer, Navbar } from "."

interface HomeLayoutProps {
  children: React.ReactNode
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
