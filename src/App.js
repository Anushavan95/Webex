import React, { useState } from "react";
import "./App.scss";
import Auth from "./Components/Auth/Auth";
import { Route } from "react-router-dom";
import Account from "./Components/Account/Account";

export default function App() {
  return (
    <div className="App">
      <Route exact path={"/"} render={() => <Auth />} />
      <Route path={"/account"} render={() => <Account />} />
    </div>
  );
}
