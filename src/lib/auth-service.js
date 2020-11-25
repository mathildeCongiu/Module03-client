import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup({  name, email, password, logo, street, number,  flat,  city, postcode,  country,  phoneNumber,  description, typeName,  pickupDate, pickupPlace, pickupHour }) {
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
          pickupPlace,
          pickupHour

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

  login({ email, password, isBusiness }) {
    if(isBusiness) {
      return this.auth
        .post("/auth/login/business", { email, password })
        .then(({ data }) => data);
      // .then((response) => response.data);
    }
    else {
      return this.auth
      .post("/auth/login/association", { email, password })
      .then(({ data }) => data);
    }
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }

  deleteUser() {
    return this.auth.delete("/delete-user", {}).then(({ data }) => data);
  }

  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.auth.post("/api/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
