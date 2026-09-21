import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, Building2 } from "lucide-react";

const EmployeeCard = ({ employee }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`border rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md ${
        theme === "dark"
          ? "bg-[#1E293B] border-slate-700 text-white"
          : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3.5">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                employee.status === "Active"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {employee.status}
            </span>
            <h3 className="font-serif font-bold text-base mt-1 line-clamp-1">
              {employee.name}
            </h3>
            <p className="text-xs text-[#C8A45D] font-semibold">
              {employee.designation}
            </p>
          </div>
        </div>

        <div
          className={`space-y-1.5 pt-3 border-t   text-xs  ${theme === "dark" ? "border-slate-700 text-slate-300" : "border-slate-200 text-slate-600 "}`}
        >
          <p className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-[#2F5D3A]" />{" "}
            {employee.department}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#2F5D3A]" /> {employee.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#2F5D3A]" /> {employee.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
