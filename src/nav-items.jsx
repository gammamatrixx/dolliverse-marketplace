import { HomeIcon, ShirtIcon, BabyIcon, DogIcon, CatIcon, SettingsIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Categories from "./pages/Categories.jsx";
import ClothingDolls from "./pages/ClothingDolls.jsx";
import BabyDolls from "./pages/BabyDolls.jsx";
import AnimalDolls from "./pages/AnimalDolls.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Categories",
    to: "/categories",
    icon: <ShirtIcon className="h-4 w-4" />,
    page: <Categories />,
  },
  {
    title: "Clothing Dolls",
    to: "/categories/clothing",
    icon: <ShirtIcon className="h-4 w-4" />,
    page: <ClothingDolls />,
  },
  {
    title: "Baby Dolls",
    to: "/categories/baby",
    icon: <BabyIcon className="h-4 w-4" />,
    page: <BabyDolls />,
  },
  {
    title: "Animal Dolls",
    to: "/categories/animal",
    icon: <DogIcon className="h-4 w-4" />,
    page: <AnimalDolls />,
  },
  {
    title: "Admin",
    to: "/admin",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <AdminDashboard />,
  },
];
