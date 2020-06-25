import React from "react";
import ShopGames from "../../assets/shopVideoGames.png";
import ShopWebsAndMovies from "../../assets/shopMoviesWebs.png";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopGames})`,
          }}
        >
          <a>Shop Games</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWebsAndMovies})`,
          }}
        >
          <a>Shop Movies or Websites</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
