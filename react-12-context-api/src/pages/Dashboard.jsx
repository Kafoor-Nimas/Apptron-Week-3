import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import ProfileCard from "../components/ProfileCard";
import ThemeToggle from "../components/ThemeToggle";
import EmployeeCard from "../components/EmployeeCard";
import { useTheme } from "../context/ThemeContext";
import { initialEmployees } from "../data/employees";
import { Users, UserCheck, UserX, Building } from "lucide-react";

const Dashboard = () => {
  const { theme } = useTheme();
  const [employees] = useState(initialEmployees);

  // Dynamic Dashboard Statistics
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((e) => e.status === "Active").length;
  const onLeaveEmployees = employees.filter(
    (e) => e.status === "On Leave",
  ).length;
  const totalDepartments = new Set(employees.map((e) => e.department)).size;

  return (
    <div
      className={`min-h-screen transition-colors ${theme === "dark" ? "bg-[#0F172A]" : "bg-[#F8F4E8]"}`}
    >
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-[1500px] mx-auto">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 space-y-8">
          {/* Top Profile & Theme Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* <ProfileCard /> */}
            </div>
            <ThemeToggle />
          </div>

          {/* Dashboard Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className={`p-5 rounded-2xl border flex items-center justify-between ${
                theme === "dark"
                  ? "bg-[#1E293B] border-slate-700 text-white"
                  : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
              }`}
            >
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Total Employees
                </p>
                <p className="text-2xl font-serif font-bold mt-1">
                  {totalEmployees}
                </p>
              </div>
              <Users className="w-8 h-8 text-[#2F5D3A]" />
            </div>

            <div
              className={`p-5 rounded-2xl border flex items-center justify-between ${
                theme === "dark"
                  ? "bg-[#1E293B] border-slate-700 text-white"
                  : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
              }`}
            >
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Active Employees
                </p>
                <p className="text-2xl font-serif font-bold text-emerald-600 mt-1">
                  {activeEmployees}
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-emerald-600" />
            </div>

            <div
              className={`p-5 rounded-2xl border flex items-center justify-between ${
                theme === "dark"
                  ? "bg-[#1E293B] border-slate-700 text-white"
                  : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
              }`}
            >
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  On Leave
                </p>
                <p className="text-2xl font-serif font-bold text-amber-600 mt-1">
                  {onLeaveEmployees}
                </p>
              </div>
              <UserX className="w-8 h-8 text-amber-600" />
            </div>

            <div
              className={`p-5 rounded-2xl border flex items-center justify-between ${
                theme === "dark"
                  ? "bg-[#1E293B] border-slate-700 text-white"
                  : "bg-[#FFFDF7] border-[#E4DED0] text-[#173B2A]"
              }`}
            >
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Departments
                </p>
                <p className="text-2xl font-serif font-bold text-[#C8A45D] mt-1">
                  {totalDepartments}
                </p>
              </div>
              <Building className="w-8 h-8 text-[#C8A45D]" />
            </div>
          </div>

          {/* Employee Grid (8 Cards) */}
          <div className="space-y-4">
            <h2
              className={`font-serif text-xl font-bold ${theme === "dark" ? "text-white" : "text-[#173B2A]"}`}
            >
              Employee Directory
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {employees.map((emp) => (
                <EmployeeCard key={emp.id} employee={emp} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
