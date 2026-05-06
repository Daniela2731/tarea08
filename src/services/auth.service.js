const API = "http://localhost:3000/api/auth";

export const login = async (data) => {
  const res = await fetch(`${API}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const register = async (data) => {
  const res = await fetch(`${API}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const refreshToken = async () => {
  const token = localStorage.getItem("refreshToken");

  const res = await fetch(`${API}/refreshtoken`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: token })
  });

  return res.json();
};

export const logout = async () => {
  await fetch(`${API}/signout`, {
    method: "POST"
  });

  localStorage.removeItem("refreshToken");
};