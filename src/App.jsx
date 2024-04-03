import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidePanelProvider } from "./context/sidepanel.context";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./layout/Header/Header";
import SidePanel from "./layout/SidePanel/SidePanel";
import Footer from "./layout/Footer/Footer";
import "./App.css";

const POPUP_TYPES = {
  NOTIFICATION: "NOTIFICATION",
  MESSAGE: "MESSAGE",
  USER: "USER",
};

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <>
      <SidePanelProvider value={{ showPanel, setShowPanel }}>
        <Header />
        <div className="h-[calc(100vh-110px)] overflow-hidden shadow flex justify-center">
          <SidePanel />
          <div className="container p-2 m-2 dark:bg-slate-800 border-0 overflow-scroll">
            <Outlet />
          </div>
        </div>
        <Footer />
      </SidePanelProvider>
    </>
  );
}

export default App;
