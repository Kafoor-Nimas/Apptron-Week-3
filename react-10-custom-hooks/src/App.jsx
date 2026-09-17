import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8F4E8] text-[#243127] font-sans flex flex-col justify-between">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <div className="min-h-[400px] flex flex-col items-center justify-center space-y-3">
                  <h1 className="font-serif text-4xl font-bold text-[#173B2A]">
                    404
                  </h1>
                  <p className="text-sm text-[#66736A]">Page Not Found</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
