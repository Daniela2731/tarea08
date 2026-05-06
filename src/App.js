import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [view, setView] = useState("login"); // 👈 controla login/register

  const logout = () => {
    localStorage.removeItem("refreshToken");
    setUser(null);
    setAccessToken(null);
  };

  return (
    <div>
      <Navbar user={user} logout={logout} />

      {!user ? (
        view === "login" ? (
          <>
            <Login setUser={setUser} setAccessToken={setAccessToken} />
            <p style={{ textAlign: "center" }}>
              ¿No tienes cuenta?{" "}
              <button onClick={() => setView("register")}>
                Registrarse
              </button>
            </p>
          </>
        ) : (
          <>
            <Register />
            <p style={{ textAlign: "center" }}>
              ¿Ya tienes cuenta?{" "}
              <button onClick={() => setView("login")}>
                Iniciar sesión
              </button>
            </p>
          </>
        )
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;