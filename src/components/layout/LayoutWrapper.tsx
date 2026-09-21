'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header/Header';

import Footer from "@/components/common/Stack/Footer";
import GoToTop from "@/components/common/GotoTop/GoToTop";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeaderPaths = ['/sign-in', '/admin', '/teacher', '/student'];
  const showHeaderFooter = !hideHeaderPaths.some(path => pathname?.startsWith(path));

  return (
    <div className="bg-white min-h-screen text-black selection:bg-accent selection:text-white flex flex-col">
      {showHeaderFooter && <Header />}
      <div className="flex-1">
        {children}
      </div>
      {showHeaderFooter && <GoToTop />}
      {showHeaderFooter && <Footer />}
    </div>
  );
}
