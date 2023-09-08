import React from "react";
import { UtilsProvider } from "./context/utilscontext";
import AppRoutes from "./routes/routes";
import { Global } from "./Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <UtilsProvider>
        <ToastContainer />
        <AppRoutes />
        <Global />
      </UtilsProvider>
    </div>
  );
}

export default App;
