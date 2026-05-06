export default function Navbar({ user, logout }) {
  return (
    <nav>
      <a href="/">Inicio</a>

      {user?.roles.includes("ROLE_USER") && <a href="/user">User</a>}
      {user?.roles.includes("ROLE_MODERATOR") && <a href="/mod">Mod</a>}
      {user?.roles.includes("ROLE_ADMIN") && <a href="/admin">Admin</a>}

      {user && <button onClick={logout}>Cerrar sesión</button>}
    </nav>
  );
}