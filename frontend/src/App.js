import { AuthProvider } from "./context/AuthContext";
import Home from "./screen/Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
