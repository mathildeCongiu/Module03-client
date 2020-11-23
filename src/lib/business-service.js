import axios from "axios";

class PrivateBusiness {
  constructor() {
    this.BusinessFunc = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  addNewProduct(name, typeName) {
    return this.BusinessFunc.post("/business/products/new", {name, typeName}).then(({ data }) => data);
  }

  accept(id) {
    return this.BusinessFunc.post(`/business/association/accept/${id}`).then(({ data }) => data);
  }

  reject(id) {
    return this.BusinessFunc.post(`/business/association/reject/${id}`).then(({ data }) => data);
  }
}

const axiosBusinessRequestFunctions = new PrivateBusiness();

export default axiosBusinessRequestFunctions;