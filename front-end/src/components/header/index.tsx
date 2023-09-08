import React from "react";
import { Header } from "./styles";
import logo from "../../../src/assets/shopper_logo_c96d7a0414.png";
export const HeaderComponent = () => {
  return (
    <Header>
      <div>
        <img src={logo} />
      </div>
    </Header>
  );
};
