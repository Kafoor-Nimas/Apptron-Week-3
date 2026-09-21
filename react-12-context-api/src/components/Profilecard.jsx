import { Building, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const Profilecard = () => {
  const { theme } = useTheme();
  const { currentUser } = useUser();
  return (
    <div
      className={`p-6 rounded-2xl border transition-colors shadow-xs ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"}`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <img
          src={currentUser.profileImage}
          alt={currentUser.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-[#C8A45D] shadow-md"
        />
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h2 className="font-serif text-xl font-bold">{currentUser.name}</h2>
            <span className="px-2.5 py-0.5 bg-[#C8A45D]/20 text-[#C8A45D] text-xs font-semibold rounded-full border border-[#C8A45D]/40">
              {currentUser.id}
            </span>
          </div>
          <p
            className={`text-xs font-bold uppercase tracking-wider ${theme === "dark" ? "text-emerald-400" : "text-[#2F5D3A]"}`}
          >
            {currentUser.designation}
          </p>

          <div
            className={`pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs  ${theme === "dark" ? "text-slate-300" : "text-slate-600 "}`}
          >
            <p className="flex items-center justify-center sm:justify-start gap-1.5">
              <Building className="w-3.5 h-3.5 text-[#C8A45D]" />{" "}
              {currentUser.department}
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C8A45D]" />
              {currentUser.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
