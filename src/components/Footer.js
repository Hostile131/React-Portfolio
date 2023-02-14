import React from "react";
import portrait from './images/Portrait.jpg'

export default function Head() {
    return (
        <div>
<div class="ribbon l-box-lrg pure-g" id="about">
  <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
    <img
      width="300"
      alt="Ben Portrait"
      class="pure-img-responsive"
      src={portrait}
    />
  </div>
  <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
    <h2 class="content-head content-head-ribbon">About Ben</h2>
    <p>
      Ben is a United States Air Force veteran who is developing coding skills
      as an avenue towards being able to spend more time with his wife and son,
      instead of being deployed overseas all the time.
    </p>
  </div>
</div>
<div class="content" id="contact">
  <h2 class="content-head is-center">Links and Contact Information</h2>
  <div class="pure-g">
    <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
      <h4>
        <a
          href="https://github.com/Hostile131"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub Profile</a
        >
      </h4>
      <h4><a href="mailto:actuallysmart@yahoo.com">Email</a></h4>
    </div>
  </div>
</div>
</div>
    );
}
