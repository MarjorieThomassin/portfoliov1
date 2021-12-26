import React from "react";
import Bounce from "react-reveal/Bounce";
import "../css/home.css";
// import flowers from "../assets/flowers.png";

function Home() {
  return (
    <div className="content">
      <div className="display-elements">
        <Bounce left cascade>
          <div className="titles">
            <h1 className="firstname">MARJORIE</h1>
            <h2 className="lastname"> THOMASSIN </h2>
            <h3 className="job-title">Développeuse Web</h3>
          </div>
        </Bounce>
        <div className="flower-container" />
      </div>
      <div className="arrow">
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <span />
          <span />
          <span />
        </a>
      </div>
    </div>
  );
}

export default Home;
