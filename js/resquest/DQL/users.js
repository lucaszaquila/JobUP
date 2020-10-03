// DQL de usuarios
const getUsers = async () => {
  const users = await api("/usuarios", {
    method: "GET",
    mode: "cors",
  });
  return users;
};

const getUser = async (user = "") => {
  const user = await api(`/usuarios/${user}`, {
    method: "POST",
    mode: "cors",
  });
  return user;
};
