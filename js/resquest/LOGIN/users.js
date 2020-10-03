//Login do usuario

const loginUser = async (user = "") => {
  const login = await api(`/usuarios/${user}`, {
    method: "PUT",
    mode: "cors",
  });
  return login;
};
