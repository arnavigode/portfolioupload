import React from "react";
import styled from "styled-components";

const StyleNav = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .navbarp {
    align-items: center;
    height: 40px;
    background: #3f3f3f;
    /* background-color: red; */
    color: black;
    font-family: "Raleway", sans-serif;
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    position: fixed;
    width: 100vw !important;
    top: 0;
    z-index: 1 !important;
    /* overflow: hidden; */
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    padding: 5px 10px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export default function RespNavbar() {
  return (
    <StyleNav>
      <div
        className="container-fluid navbarp"
        style={{
          backgroundColor: "#3f3f3f",
          color: "white",
          textDecoration: "none",
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        <div className="row">
          <div className="col"></div>
          <div className="col" 
          style={{display:"flex", marginTop:"10px"}}>
           
              <div className="col">
                <a href="#home" style={{ color: "white" }}>
                  <b>Home</b>
                </a>
              </div>
              <div className="col">
                <a href="#about" style={{ color: "white" }}>
                  <b>About</b>
                </a>
              </div>
              <div className="col">
                <a href="#skills" style={{ color: "white" }}>
                  <b>Skills</b>
                </a>
              </div>
              <div className="col">
                <a href="#projects" style={{ color: "white" }}>
                  <b>Projects</b>
                </a>
              </div>
              <div className="col">
                <a href="#footer">
                  <b>Contact</b>
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </StyleNav>
  );
}
