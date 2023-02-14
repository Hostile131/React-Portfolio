import React from "react";
import Menu from "./Menu";

export default function Display() {
  return (
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a class="pure-menu-heading" href="#">
          Ben's Portfolio
        </a>
        <Menu />
      </div>
    </div>
  );
}
