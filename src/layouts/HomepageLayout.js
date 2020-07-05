import React from "react";
import Header from "../components/Header/index.js";
import Footer from "../components/Footer/index.js";

const HomepageLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
