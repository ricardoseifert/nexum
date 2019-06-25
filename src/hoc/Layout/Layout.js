import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <>
        <Header>
          <NavLink to="/">
            <img alt="Logo" src={require("../../assets/img/Logo.png")} />
          </NavLink>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
            </ul>
          </nav>
        </Header>
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default withRouter(Layout);
