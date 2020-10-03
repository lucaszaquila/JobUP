//DML de usuarios

const createUser = async (body = {}) => {
  const res = await api("/usuarios", {
    method: "POST",
    mode: "cors",
    body,
  });
  return res;
};

const deleteUser = async (user = "") => {
  const res = await api(`/usuarios/${user}`, {
    method: "DELETE",
    mode: "cors",
  });
  return res;
};

const updateUser = async (user = "", body = {}) => {
  const updated = await api(`/usuarios/${user}`, {
    method: "PUT",
    mode: "cors",
    body,
  });
  return updated;
};

