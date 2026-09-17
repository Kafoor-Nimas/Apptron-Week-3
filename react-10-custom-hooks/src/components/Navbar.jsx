import {
  Leaf,
  LogOut,
  LayoutDashboard,
  Package,
  BarChart3,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Package className="w-4 h-4" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart3 className="w-4 h-4" />,
    },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF7] border-b border-[#E4DED0] h-[76px] flex items-center">
      <div className="max-w-[1500px] w-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-[#2F5D3A] " />
          <div>
            <span className="font-serif font-bold text-lg tracking-wider text-[#173B2A] block leading-tight">
              CEYLON TEA
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#C8A45D] font-sans font-semibold uppercase block">
              INVENTORY
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-2 font-medium text-sm transition-all py-1 ${isActive ? "text-[#2F5D3A] font-semibold border-b-2 border-[#2F5D3A]" : "text-[#66736A] hover:text-[#2F5D3A] "}`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <button className="flex items-center gap-2 font-semibold text-rose-600 hover:text-rose-700 transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
