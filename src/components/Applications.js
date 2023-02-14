import React from "react";
import AppCard from "./AppCard";
import Footer from "./Footer";

export default function Display() {
  return (
    <div>
      <div class="splash-container" id="home">
        <div class="splash">
          <h1 class="splash-head">
            Welcome to Ben's Journey through web development!
          </h1>
        </div>
      </div>
      <div class="content-wrapper" id="projects">
        <div class="content">
          <h2 class="content-head is-center">Web Development Projects</h2>
          <div class="pure-g">
            <AppCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
