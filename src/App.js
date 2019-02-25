import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/details';
import Cart from './components/cart';
import Default from './components/default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <ProductList/>
        <Details/>
        <Cart/>
        <Default/>
      </React.Fragment>
    );
  }
}

export default App;
