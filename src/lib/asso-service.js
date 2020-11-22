import axios from "axios";

class PrivateAsso {
  constructor() {
    this.asso = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  search() {
    return this.asso.get("/association/search").then(({ data }) => data);

    
  }
}

const axiosAssoRequestFunctions = new PrivateAsso();

export default axiosAssoRequestFunctions;
