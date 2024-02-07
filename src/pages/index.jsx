import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div>HomePage</div>
      <Link to="/grape-editor">grape-editor</Link>
      <Link to="/easy-editor">easy-editor</Link>
      <Link to="/unlayer-editor">unlayer-editor</Link>
    </div>
  );
};

export default HomePage;
