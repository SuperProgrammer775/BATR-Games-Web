import React, { useState } from "react";
import Directory from "../../components/Directory/index.js";
import "./styles.scss";

const Homepage = (props) => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};

export default Homepage;
