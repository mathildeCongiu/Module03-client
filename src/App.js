import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import {Route } from "react-router-dom"

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
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
import Attributions from "./pages/Attributions";
import AboutUs from "./pages/AboutUs";
import EditForm from "./pages/EditForm";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <Route exact path="/attributions" component={Attributions} />
            <Route exact path="/about-us" component={AboutUs} />
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute exact path="/signup" component={SignUp} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/products" component={ProductsPage} />
            <PrivateRoute exact path="/products/add" component={AddProduct} />
            <PrivateRoute exact path="/products/edit/:id" component={EditProduct} />
            <PrivateRoute exact path="/others" component={Others} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute exact path= "/business-details/:id" component={BusinessDetail} />
            <PrivateRoute exact path="/association-details/:id" component={AssoDetails} />
            <PrivateRoute exact path="/edit" component={EditForm} />
            
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;

