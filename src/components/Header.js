import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="cf">
        <a
          className="header_content bottom"
          href="https://www.facebook.com/profile.php?id=100008990461138"
        >
          Taegyu
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100008990461138"
          className="header_content top"
        >
          Taegyu
        </a>
      </div>
      <div className="cf">
        <a
          className="header_content bottom"
          href="https://github.com/riazguzman"
        >
          GitHub
        </a>
        <a className="header_content top" href="https://github.com/riazguzman">
          GitHub
        </a>
      </div>
      <div className="cf">
        <a className="header_content bottom" href="https://www.stomble.com/">
          Stomble
        </a>
        <a href="https://www.stomble.com/" className="header_content top">
          Stomble
        </a>
      </div>
    </div>
  );
};

export default Header;
