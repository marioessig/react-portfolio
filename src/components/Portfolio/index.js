import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Flash Beats",
      description:
        "A website that provides a clean and accurate way to search for your favorite songs while also displaying the lyrics.",
      image: "screenshot_FlashBeats.gif",
      technologies: ["HTML/CSS", "JavaScript", "jQuery"],
      github: "https://github.com/TeamFlash1/music-app",
      deployed: "https://teamflash1.github.io/music-app/",
    },
    {
      name: "Run Buddy",
      description: "A website that offers fitness training services.",
      image: "screenshot_RunBuddy.png",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/TeamFlash1/music-app",
      deployed: "https://teamflash1.github.io/music-app/",
    },
    {
      name: "Work Day Scheduler",
      description:
        "A website that users can save events for each hour of the day.",
      image: "screenshot_WorkDayScheduler.gif",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/marioessig/work-day-scheduler",
      deployed: "https://marioessig.github.io/work-day-scheduler/",
    },
    {
      name: "Weather Dashboard",
      description:
        "A weather dashboard that shows current weather and five-day weather forecast for any city.",
      image: "screenshot_WeatherDashboard.gif",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/marioessig/weather-dashboard",
      deployed: "https://marioessig.github.io/weather-dashboard/",
    },
    {
      name: "Quizzantor",
      description:
        "A website that players can answer timed questions and have their high scores saved.",
      image: "screenshot_Quizzinator.gif",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/marioessig/quizzinator",
      deployed: "https://marioessig.github.io/quizzinator",
    },
    {
      name: "Note Taker",
      description:
        "This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.",
      image: "screenshot_NoteTaker.png",
      technologies: ["HTML", "CSS", "JavaScript", "Express"],
      github: "https://github.com/marioessig/note-taker",
      deployed: "https://geekpanda-note-taker.herokuapp.com/",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
