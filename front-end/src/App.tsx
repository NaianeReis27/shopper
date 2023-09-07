import { UtilsProvider } from './context/utilscontext';
import AppRoutes from './routes/routes';
import { Global } from "./Global";
function App() {
  return (
    <div className="App">
     <UtilsProvider>
        <AppRoutes />
        <Global></Global>
      </UtilsProvider>
    </div>
  );
}

export default App;
