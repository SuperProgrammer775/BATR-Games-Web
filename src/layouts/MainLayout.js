import React from "react";
import Header from "../components/Header/index.js";
import Footer from "../components/Footer/index.js";

const MainLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
