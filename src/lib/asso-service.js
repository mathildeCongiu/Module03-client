import axios from "axios";

class PrivateAsso {
  constructor() {
    this.assoFunc = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  searchBusinesses() {
    return this.assoFunc.get("/association/search").then(({ data }) => data); 
  }

  postRequest(id) {
    return this.assoFunc.post(`/association/business/${id}`).then(({ data }) => data)
  }

  getBusiness(id) {
    return this.assoFunc.get(`/association/business/${id}`).then(({ data }) => data)
  }
}

const axiosAssoRequestFunctions = new PrivateAsso();

export default axiosAssoRequestFunctions;
