import React from "react";

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={require("../../assets/images/SmilingMario475pxHeight.png")}
          alt="mario"
          className="photo"
        />
      </div>
      <div>
        <p>
          I have been mingling with data for over 13 years! Curiosity gets the
          best out of me so often. Having data at my fingertips, I knew I had
          the skill to make the systems work for me as I am so lazy. Whoa, you
          heard me right! I am a big fan of Bill Gate's quote:
        </p>
        <p>
          <center>
            <i>
              "I choose a lazy person to do a hard job. Because a lazy person
              will find an easy way to do it.!"
            </i>
          </center>
        </p>
        <p>
          Because of that, I enjoy maximizing my productivity by finding an easy
          way to achieve such a hard job (but with top-notch quality, might I
          add here)!
        </p>
      </div>
    </section>
  );
}

export default About;
