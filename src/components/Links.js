import React from "react";
import PropTypes from "prop-types";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

Links.propTypes = {
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

Links.defaultProps = {
  github: "",
  linkedin: "",
};

export default Links;
