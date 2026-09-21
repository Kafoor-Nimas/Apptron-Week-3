import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* Main dashboard route */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Fallback 404 route */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F4E8] text-[#173B2A]">
                  <h1 className="font-serif text-4xl font-bold">404</h1>
                  <p className="text-sm opacity-80 mt-1">Page Not Found</p>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
