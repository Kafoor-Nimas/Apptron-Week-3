import { Leaf, Mail, Shield } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { theme } = useTheme();
  const { currentUser } = useUser();

  return (
    <header
      className={`sticky top-0 z-40 border-b px-6 py-3.5 transition-colors ${
        theme === "dark"
          ? "bg-[#1E293B] border-slate-700 text-white"
          : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-[#2F5D3A]" />
          <div>
            <span className="font-serif font-bold text-lg tracking-wider block leading-tight">
              CEYLON TEA
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#C8A45D] font-semibold uppercase block">
              EMPLOYEE PORTAL
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <h4 className="text-sm font-semibold leading-tight">
              {currentUser.name}
            </h4>
            <div className="flex items-center justify-end gap-2 text-xs opacity-75 mt-0.5">
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#C8A45D]" />
                {currentUser.id}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {currentUser.email}
              </span>
            </div>
          </div>
          <img
            src={currentUser.profileImage}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-[#C8A45D]"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
