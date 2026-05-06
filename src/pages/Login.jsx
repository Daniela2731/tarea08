import { useState } from "react";
import { login } from "../services/auth.service";

export default function Login({ setUser, setAccessToken }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Campos obligatorios");
      return;
    }

    try {
      const data = await login(form);

      // 🔐 Guardar tokens
      setAccessToken(data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      // 👤 Guardar usuario
      setUser({
        username: data.username,
        roles: data.roles
      });

      alert("Login exitoso 🚀");
    } catch (error) {
      console.error(error);
      alert("Error en login");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuario"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button>Ingresar</button>
      </form>
    </div>
  );
}