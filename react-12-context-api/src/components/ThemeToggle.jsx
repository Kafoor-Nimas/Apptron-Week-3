import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`p-6 rounded-2xl border transition-colors shadow-xs flex flex-col justify-between ${
        theme === "dark"
          ? "bg-[#1E293B] border-slate-700 text-white"
          : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
      }`}
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          {theme === "dark" ? (
            <Moon className="w-5 h-5 text-amber-400" />
          ) : (
            <Sun className="w-5 h-5 text-amber-500" />
          )}
          <h3 className="font-serif font-bold text-base">Theme Mode</h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Currently active:{" "}
          <span className="font-bold uppercase">{theme} mode</span>
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2.5 bg-[#2F5D3A] text-white rounded-xl text-xs font-semibold hover:bg-[#173B2A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
