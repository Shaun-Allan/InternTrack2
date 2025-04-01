import React from "react";
import "./Header.css";

const Header = () => {
  function logout() {
    window.location.href = "../index.html";
  }
  return (
    <>
      <header id="navbar">
        <img
          src="/intern track.png"
          a
          lt="intern track.png"
          id="intern-track"
        />
        <div id="header-right">
          <img src="/ssn.png" alt="ssn" id="ssn" />
          <button id="logout" onClick={logout}>
            <i class="fa fa-sign-out"></i> <span>Logout</span>
          </button>
        </div>
      </header>
      <div class="video-container">
        <video
          id="ssn-banner-video"
          src="/ssn-banner-video.mov"
          autoplay
          muted
          playsinline
          loop
        ></video>
      </div>
    </>
  );
};

export default Header;
