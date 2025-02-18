import React from "react";
import PropTypes from "prop-types";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        David is a Web Developer from Mombasa
      </h1>
    </div>
  );
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Home.defaultProps = {
  color: "black",
};


export default Home;
