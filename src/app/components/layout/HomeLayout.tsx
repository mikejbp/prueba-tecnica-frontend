import { Footer, Navbar } from "."

interface HomeLayoutProps {
  children: React.ReactNode
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
