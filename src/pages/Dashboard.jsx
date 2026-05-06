export default function Dashboard({ user }) {
  if (user.roles.includes("ROLE_ADMIN")) {
    return <h2>Panel de Administrador 🛠️</h2>;
  }

  if (user.roles.includes("ROLE_MODERATOR")) {
    return <h2>Panel de Moderador 🧑‍💻</h2>;
  }

  return <h2>Panel de Usuario 👤</h2>;
}