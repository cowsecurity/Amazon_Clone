import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-node.herokuapp.com",
});

export default instance;
