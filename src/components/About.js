import React from "react";
import Links from "./Links";
import PropTypes from "prop-types";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this!</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

About.propTypes = {
  bio: PropTypes.string,
  links: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

About.defaultProps = {
  bio: "",
  links: {},
};


export default About;
