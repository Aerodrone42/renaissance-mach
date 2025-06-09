
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from '@/components/common/FloatingCallButton';

interface LayoutProps {
  children: ReactNode;
  showErrorToast?: boolean;
}

export default function Layout({ children, showErrorToast }: LayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show error toast if needed - only run once when component mounts
  useEffect(() => {
    if (showErrorToast) {
      // Use a longer timeout to ensure toast system is fully ready
      const timer = setTimeout(() => {
        toast.error("Page non trouvée", {
          description: "La page que vous recherchez n'existe pas ou a été déplacée.",
          duration: 5000,
        });
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [showErrorToast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
