import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup({  name, email, password, logo, street, number,  flat,  city, postcode,  country,  phoneNumber,  description, typeName,  pickupDate, pickupPlace }) {
    if(typeName) {
      return this.auth
        .post("/auth/signup/business", {  
          name,
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
          pickupPlace
        })
        .then(({ data }) => data);
    }
    else {
      return this.auth
      .post("/auth/signup/association", {  name,
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
        })
      .then(({ data }) => data);
    }
  }

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }

}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
