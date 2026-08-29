import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 page-enter">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  );
}
