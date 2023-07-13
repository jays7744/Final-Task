import axios from "axios";

const apiService = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  
  
  function getUsers() {
    return apiService.get("/users");
  }
  
  export const API = {
    getUsers,
  };
  