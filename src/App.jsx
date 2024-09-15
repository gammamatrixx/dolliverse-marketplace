import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import ClothingDolls from "./pages/ClothingDolls";
import BabyDolls from "./pages/BabyDolls";
import AnimalDolls from "./pages/AnimalDolls";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {navItems.map(({ to, title }) => {
            let Component;
            switch (title) {
              case "Categories":
                Component = Categories;
                break;
              case "Clothing Dolls":
                Component = ClothingDolls;
                break;
              case "Baby Dolls":
                Component = BabyDolls;
                break;
              case "Animal Dolls":
                Component = AnimalDolls;
                break;
              case "Admin":
                Component = AdminDashboard;
                break;
              default:
                Component = Index;
            }
            return <Route key={to} path={to} element={<Component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
