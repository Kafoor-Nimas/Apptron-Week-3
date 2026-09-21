import { Users, LayoutDashboard, Building2, BadgeCheck } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { theme } = useTheme();
  const { currentUser } = useUser();

  return (
    <aside
      className={`w-full md:w-64 p-5 border-r min-h-screen transition-colors ${
        theme === "dark"
          ? "bg-[#0F172A] border-slate-700 text-slate-300"
          : "bg-[#FFFDF7] border-[#E4DED0] text-[#66736A]"
      }`}
    >
      {/* Current Logged User Summary */}
      <div
        className={`p-4 rounded-xl border mb-6 ${
          theme === "dark"
            ? "bg-[#1E293B] border-slate-700"
            : "bg-[#F8F4E8] border-[#E4DED0]"
        }`}
      >
        <p className="text-[10px] font-bold text-[#C8A45D] uppercase tracking-wider">
          Logged In As
        </p>
        <p
          className={`font-serif font-bold text-sm   mt-1 ${theme === "dark" ? "text-white" : "text-[#173B2A]"}`}
        >
          {currentUser.name}
        </p>
        <p className="text-xs opacity-80 mt-0.5">{currentUser.designation}</p>
        <div className="mt-2 pt-2 border-t border-[#E4DED0] dark:border-slate-700 text-[11px] space-y-0.5">
          <p>
            <span className="font-semibold">Dept:</span>{" "}
            {currentUser.department}
          </p>
          <p>
            <span className="font-semibold">ID:</span> {currentUser.id}
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1.5 font-medium text-sm">
        <Link
          to={"/dashboard"}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#2F5D3A] text-white font-semibold"
        >
          <LayoutDashboard className="w-4 h-4" /> Dashboard
        </Link>
        <Link
          to={"/employees"}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-[#F8F4E8] dark:hover:bg-slate-800 transition-colors"
        >
          <Users className="w-4 h-4" /> Employees
        </Link>
        <Link
          to={"/departments"}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-[#F8F4E8] dark:hover:bg-slate-800 transition-colors"
        >
          <Building2 className="w-4 h-4" /> Departments
        </Link>
        <Link
          to={"/designations"}
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-[#F8F4E8] dark:hover:bg-slate-800 transition-colors"
        >
          <BadgeCheck className="w-4 h-4" /> Roles
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
