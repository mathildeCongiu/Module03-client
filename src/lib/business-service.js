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

  editProduct(name, typeName, id) {
    return this.BusinessFunc.put(`/business/products/edit/${id}`, {name, typeName}).then(({ data }) => data);
  }

  deleteProduct(id) {
    return this.BusinessFunc.delete(`/business/products/${id}`).then(({ data }) => data);
  }

  accept(id) {
    return this.BusinessFunc.post(`/business/association/accept/${id}`).then(({ data }) => data);
  }

  reject(id) {
    return this.BusinessFunc.post(`/business/association/reject/${id}`).then(({ data }) => data);
  }

  editBusiness( name,
    email,
    password,
    logo,
    street,
    number,
    flat,
    city,
    postcode,
    country,
    phoneNumber,
    description,
    typeName,
    pickupDate,
    pickupPlace,
    pickupHour) {
    return this.BusinessFunc.put(`/business/edit`,  name,
    email,
    password,
    logo,
    street,
    number,
    flat,
    city,
    postcode,
    country,
    phoneNumber,
    description,
    typeName,
    pickupDate,
    pickupPlace,
    pickupHour).then(({ data }) => data)
  }
}

const axiosBusinessRequestFunctions = new PrivateBusiness();

export default axiosBusinessRequestFunctions;