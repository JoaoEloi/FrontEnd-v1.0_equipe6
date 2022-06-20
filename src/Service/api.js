import axios from "axios";

export const apiCategoria = axios.create({
  baseUrl: "https://hospedagem-api.herokuapp.com/categorias",
});

export const createSession = async (email, password) => {
  return apiCategoria.post("/api/session", { email, password });
};
