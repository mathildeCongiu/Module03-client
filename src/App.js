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
import Others from "./pages/Others";
import Search from "./pages/Search";
import BusinessDetail from "./pages/BusinessDetail";
import AssoDetails from "./pages/AssoDetails";

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
            <PrivateRoute exact path="/others" component={Others} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path="/business-details" component={BusinessDetail} />
            <PrivateRoute exact path="/association-details" component={AssoDetails} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;

