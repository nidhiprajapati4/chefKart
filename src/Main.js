import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Food from "./components/Food/Food";
import FoodItemDetails from "./components/Food/FoodItemDetails/FoodItemDetails";

const Main = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Food} />
        <Route exact path="/FoodItemDetails" component={FoodItemDetails} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default Main;
