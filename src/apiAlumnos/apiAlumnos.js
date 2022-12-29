import axios from "axios";

export const apiAlumnos = axios.create({
  baseURL: `http://localhost:8080/socio`,
});