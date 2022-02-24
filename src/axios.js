import axios from "axios";

const instance = axios.create({
  baseURL: "your own url",
});

export default instance;
