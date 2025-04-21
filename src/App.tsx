
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Pages
import Index from "./pages/Index";
import Restaurant from "./pages/Restaurant";
import Bar from "./pages/Bar";
import Epicerie from "./pages/Epicerie";
import Localites from "./pages/Localites";
import LocalitePage from "./pages/LocalitePage";
import Contact from "./pages/Contact";
import Merci from "./pages/Merci";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <link rel="icon" href="/lovable-uploads/15e6e565-d044-4ad3-a606-903c429297fc.png" />
        <link rel="icon" href="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png" />
        <meta name="theme-color" content="#C1432A" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <TooltipProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/epicerie" element={<Epicerie />} />
            <Route path="/localites" element={<Localites />} />
            <Route path="/localites/:slug" element={<LocalitePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merci" element={<Merci />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-center" richColors closeButton duration={6000} />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
