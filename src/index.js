import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import Counter from "./counter";
import Clock from "./clock";
import FontSizer from "./font-sizer";
import Toggle from "./toggle";
import ShowHide from "./show-hide";
import Alignment from "./alignment";
import ChangeColor from "./change-color";
import Home from "../navigation/home";
import NavBar from "../navigation/navbar";

const routes = {
  "/": () => <Home />,
  "/counter": () => <Counter />,
  "/clock": () => <Clock />,
  "/font-sizer": () => <FontSizer />,
  "/toggle": () => <Toggle />,
  "/show-hide": () => <ShowHide />,
  "/alignment": () => <Alignment />,
  "/change-color": () => <ChangeColor />
};

function App() {
  return (
    <div>
      <NavBar />
      {useRoutes(routes)}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
