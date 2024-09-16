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
import AdminProductEdit from "./components/AdminProductEdit";
import AdminProductForm from "./components/AdminProductForm";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";

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
          <Route path="/admin/edit/:id" element={<AdminProductEdit />} />
          <Route path="/admin/add" element={<AdminProductForm mode="add" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
