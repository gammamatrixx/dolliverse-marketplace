import { HomeIcon, ShirtIcon, BabyIcon, DogIcon, SettingsIcon } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Categories",
    to: "/categories",
    icon: <ShirtIcon className="h-4 w-4" />,
  },
  {
    title: "Clothing Dolls",
    to: "/categories/clothing",
    icon: <ShirtIcon className="h-4 w-4" />,
  },
  {
    title: "Baby Dolls",
    to: "/categories/baby",
    icon: <BabyIcon className="h-4 w-4" />,
  },
  {
    title: "Animal Dolls",
    to: "/categories/animal",
    icon: <DogIcon className="h-4 w-4" />,
  },
  {
    title: "Admin",
    to: "/admin",
    icon: <SettingsIcon className="h-4 w-4" />,
  },
];
