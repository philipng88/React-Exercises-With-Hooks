import React from "react";
import { A } from "hookrouter";

const NavBar = () => {
  return (
    <div
      className="navigation-bar"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <A href="/">Home</A>
      <A href="/counter">Counter</A>
      <A href="/clock">Clock</A>
      <A href="/font-sizer">Font Sizer</A>
      <A href="/toggle">Toggle</A>
      <A href="/show-hide">Show/Hide</A>
      <A href="/alignment">Alignment</A>
      <A href="/change-color">Change Color</A>
    </div>
  );
};

export default NavBar;
