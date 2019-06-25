import React from "react";
import "./App.css";

import Cart from "./containers/Cart/Cart";
import Delivery from "./containers/Delivery/Delivery";
import Payment from "./containers/Payment/Payment";
import Layout from "./hoc/Layout/Layout";

import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/payment" component={Payment} />
          <Redirect from="/" to="/cart" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
