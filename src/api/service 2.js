// // api/service.js

// import axios from "axios";

// class Service {
//   constructor() {
//     this.service = axios.create({
//         baseURL: process.env.REACT_APP_API_URL,
//       withCredentials: true // => you might need this when having the users in the app
//       // XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request.
//       // withCredentials indicates whether or not cross-site Access-Control requests should be made using credentials
//     });
//   }
//   handleUpload = async (theFile) => {
//     console.log("file in service: ", theFile);

//     try {
//       const res = await this.service.post("/api/upload", theFile);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };


// }

// const axiosRequestFunctions = new Service();

// export default axiosRequestFunctions;