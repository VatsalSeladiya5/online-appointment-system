import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getDoctors = () => API.get("/doctors");
export const getLawyers = () => API.get("/lawyers");

export const addDoctor = (data) => API.post("/doctors", data);
export const addLawyer = (data) => API.post("/lawyers", data);