import React from "react";
import "../css/Nav.css";

function Nav() {
  return (
    <nav>
      <div className="Nav-nav">
        <a
          className="Nav-main"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Kaleshia
        </a>
        <a
          className="Nav-community"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Community
        </a>
        <a
          className="Nav-career"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Career
        </a>
        <a
          className="Nav-dev"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Dev
        </a>
      </div>
      <div className="Nav-social">
        <a
          className="Nav-linkedIn"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="Nav-insta"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="Nav-email"
          href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Email
        </a>
      </div>
    </nav>
  );
}
export default Nav;
