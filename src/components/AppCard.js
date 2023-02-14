import React, { useState } from "react";
import screenshot1 from "./images/screenshot.jpg";
import screenshot2 from "./images/Module4.jpg";
import screenshot3 from "./images/Scheduler.jpg";
import screenshot4 from "./images/Streaming.jpg";
import screenshot5 from "./images/Weather.jpg";
import screenshot6 from "./images/Sequelize.jpg";

export default function Display() {
  const [apps, setApps] = useState([
    {
      name: "Password Generator",
      deployedUrl: "https://hostile131.github.io/module-3-challenge/",
      screenshot: screenshot1,
      screenshotAlt: "Screenshot of Password Generator Application",
      description: "This application generates a random password.",
      githubUrl: "https://github.com/Hostile131/module-3-challenge",
    },
    {
      name: "Quiz Website",
      deployedUrl: "https://hostile131.github.io/module-4-challenge/",
      screenshot: screenshot2,
      screenshotAlt: "Screenshot of Quiz Website Application",
      description: "This application is a coding quiz website.",
      githubUrl: "https://github.com/Hostile131/module-4-challenge",
    },
    {
        name: "Daily Organizer",
        deployedUrl: "https://hostile131.github.io/super-disco/",
        screenshot: screenshot3,
        screenshotAlt: "Screenshot of Daily Organizer Application",
        description: "This application is a daily organizer.",
        githubUrl: "https://github.com/Hostile131/super-disco",
      },
      {
        name: "Streaming Search",
        deployedUrl: "https://hostile131.github.io/project-one/",
        screenshot: screenshot4,
        screenshotAlt: "Screenshot of Streaming Service Search Application",
        description: "This application is a streaming service search application.",
        githubUrl: "https://github.com/Hostile131/project-one",
      },
      {
        name: "Weather Forecaster",
        deployedUrl: "https://hostile131.github.io/module-6-challenge/",
        screenshot: screenshot5,
        screenshotAlt: "Screenshot of Weather Forecaster Application",
        description: "This application is a 5 day weather forecast application.",
        githubUrl: "https://github.com/Hostile131/module-6-challenge",
      },
      {
        name: "Sequelize Back End",
        deployedUrl: "https://github.com/Hostile131/sequelize-back-end",
        screenshot: screenshot6,
        screenshotAlt: "Screenshot of Sequelize Back End Application",
        description: "This application is the back end of a website utilizing Sequelize.",
        githubUrl: "https://github.com/Hostile131/sequelize-back-end",
      },
  ]);

  return (
    <div>
      {apps.map((app, index) => (
        <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4" key={index}>
          <h3 class="content-subhead">
            <i class="fa fa-mobile"></i>
            {app.name}
          </h3>
          <a href={app.deployedUrl} target="_blank" rel="noopener noreferrer">
            <img id="appImage" src={app.screenshot} alt={app.screenshotAlt} />
          </a>
          <p>
            {app.description} You can view the GitHub repository{" "}
            <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
