import React, { Component } from "react";
import auth from "./auth-service"; // importamos funciones para llamadas axios a la API
// import asso from "./asso-service"; // importamos funciones para llamadas axios a la API

const { Consumer, Provider } = React.createContext();

//HOC para crear Consumer
const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {({ login, signup, user, logout, isLoggedin, deleteUser }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                deleteUser = {deleteUser}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider
class AuthProvider extends Component {
  state = { isLoggedin: false, user: null, isLoading: true };

  componentDidMount() {
    auth
      .me()
      .then((user) =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

  signup = (user) => {
    const { name, email, password, logo, street, number,  flat,  city, postcode,  country,  phoneNumber,  description, typeName,  pickupDate, pickupPlace, pickupHour } = user;
    // lamamos a auth.signup que se conecta con la ruta del backend
    auth
      .signup({ name, email, password, logo, street, number,  flat,  city, postcode,  country,  phoneNumber,  description, typeName,  pickupDate, pickupPlace, pickupHour })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(({ error }) =>
        this.setState({ message: error.data.statusMessage })
      );
  };

  login = async (user) => {
    const { email, password , isBusiness} = user;

    try {
      const user = await auth.login({ email, password,isBusiness });
      this.setState({ isLoggedin: true, user });
    } catch (error) {
      console.log(error);
    }
  };

  logout = async () => {
    try {
      await auth.logout();
      this.setState({ isLoggedin: false, user: null });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async () => {
    try {
      await auth.deleteUser();
      this.setState({ isLoggedin: false, user: null });
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const { login, logout, signup, deleteUser } = this;

    return isLoading ? (
      <img className= "spinner" src="/img/spinner.gif" alt= "Loading"/>
    ) : (
      /* dentro del value del provider tendremos datos que estarán disponibles para todos los componentes <Consumer> */
      <Provider value={{ isLoggedin, user, login, logout, signup, deleteUser }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };
export default AuthProvider;
