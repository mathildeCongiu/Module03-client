import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";


import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
// import Private from "./pages/Private";

import AuthProvider from "./lib/AuthProvider";

import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={SignUp} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/products" component={ProductsPage} />
            <PrivateRoute exact path="/products/add" component={AddProduct} />
            <PrivateRoute exact path="/products/edit" component={EditProduct} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;

