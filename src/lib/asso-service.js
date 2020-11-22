import axios from "axios";

class privateAsso {
  constructor() {
    this.asso = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  search() {
    return this.asso.get("/privateAsso/search").then(({ data }) => data);
    
  }
}

const axiosAssoRequestFunctions = new privateAsso();

export default axiosAssoRequestFunctions;
