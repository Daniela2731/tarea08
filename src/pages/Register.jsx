import { useState } from "react";
import { register } from "../services/auth.service";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: [] // ✅ correcto
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRole = (roleName) => {
    setForm((prev) => ({
      ...prev,
      role: prev.role.includes(roleName)
        ? prev.role.filter((r) => r !== roleName)
        : [...prev.role, roleName]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (form.password.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    try {
      console.log("Enviando:", form); // 🔍 para debug

      const res = await register(form);

      alert("Usuario registrado correctamente ✅");
      console.log(res);
    } catch (error) {
      console.error("ERROR:", error);
      alert("Error al registrar ❌");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Crear cuenta 🌿</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Usuario"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Correo"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />

          <h4>Selecciona roles:</h4>

          <label>
            <input type="checkbox" onChange={() => handleRole("user")} />
            Usuario
          </label>

          <label>
            <input type="checkbox" onChange={() => handleRole("moderator")} />
            Moderador
          </label>

          <label>
            <input type="checkbox" onChange={() => handleRole("admin")} />
            Admin
          </label>

          <button>Registrarse</button>
        </form>
      </div>
    </div>
  );
}