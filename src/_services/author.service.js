import { authHeader } from "../_helpers";

export const authorService = {
  getAll,
};

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`http://localhost:8075/api/v1/authors/`, requestOptions).then(
    handleResponse
  );
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log("DATA:" + data);
    return data;
  });
}
