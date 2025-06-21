import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@authToken')

  const publicRoutes = ["/auth/login", "/auth/resgister"];
  const isPublic = publicRoutes.some((route) => config.url.includes(route));

  if (!isPublic && token) {
    config.headers.Authorization = `Bearer ${token}`;

    (error) => Promise.reject(error);
  }

  
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "Erro desconhecido";
    return Promise.reject({ message: message, status: error.response?.status });
  }
);

export default api;
