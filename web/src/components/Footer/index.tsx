import React from "react";
import { FooterBar, FooterStyles } from "./styles";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="content">
          <img src={logo} alt="logo ToDo" />
          <span>Organizando sua vida desde 2021</span>
        </div>
      </FooterStyles>
      <FooterBar />
    </>
  );
}
