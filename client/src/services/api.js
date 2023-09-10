export const getUsers = async () => {
  const res = await fetch(`/tasuku/users`);
  return await res.json();
};

export const getUser = async (userId) => {
  const res = await fetch(`/tasuku/users/${userId}`);
  return await res.json();
};

export const createUser = async (body) => {
  const res = await fetch("/tasuku/createuser", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await res.json();
};

export const createProject = async (body) => {
  console.log(body)
  const res = await fetch("/tasuku/createProject", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return await res.json();
};
export const getUserProjects = async (userId) => {
  const res = await fetch(`/tasuku/userprojects/${userId}`);
  return await res.json();
}

export const updateProjects = async (body) => {
  const res = await fetch(`/tasuku/updateProjects/${body._id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
}