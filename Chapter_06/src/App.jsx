import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
