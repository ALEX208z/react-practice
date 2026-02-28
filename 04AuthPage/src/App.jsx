import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./auth/AuthPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth } from "./auth/AuthContext";

function Dashboard() {
  const { logout } = useAuth();
  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard 🎉</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;