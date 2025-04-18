
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages
import Index from "./pages/Index";
import Restaurant from "./pages/Restaurant";
import Bar from "./pages/Bar";
import Epicerie from "./pages/Epicerie";
import Localites from "./pages/Localites";
import LocalitePage from "./pages/LocalitePage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <link rel="icon" href="/lovable-uploads/1e87f1be-8ed9-42a4-844d-d0991d75e48e.png" />
      <meta name="theme-color" content="#C1432A" />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/epicerie" element={<Epicerie />} />
          <Route path="/localites" element={<Localites />} />
          <Route path="/localites/:slug" element={<LocalitePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
