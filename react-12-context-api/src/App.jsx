import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Dashboard/>


      </ThemeProvider>
      
    </UserProvider>
  );
};

export default App;
