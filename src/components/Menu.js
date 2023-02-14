import React from "react";

export default function Display() {
  return (
    <ul class="pure-menu-list">
      <li class="pure-menu-item pure-menu-selected">
        <a href="#" class="pure-menu-link">
          Home
        </a>
      </li>
      <li class="pure-menu-item">
        <a href="#projects" class="pure-menu-link">
          Projects
        </a>
      </li>
      <li class="pure-menu-item">
        <a href="#about" class="pure-menu-link">
          About
        </a>
      </li>
      <li class="pure-menu-item">
        <a href="#contact" class="pure-menu-link">
          Contact
        </a>
      </li>
    </ul>
  );
}
