import RyanProfile from "../../assets/Ryan-Profile.jpg";
import "./About.css";

function About() {
  return (
    <section className="about app__section">
      <h2 className="about__title">About The Developer</h2>
      <div className="about__content">
        <p className="about__paragraph">
          Hi, I’m Ryan — the developer behind this app. Before diving into tech,
          I spent years working in the film industry, from reality TV to feature
          films. In that fast-paced world, finding time to plan meals was always
          a challenge. I created this app to help simplify that process — to
          make it easier to discover recipes and track the ingredients you
          already have versus what you still need. Whether you're navigating a
          busy schedule or just unsure of what to cook, my goal is to make meal
          planning easier, smarter, and more enjoyable!
        </p>
        <img className="about__image" alt="Ryan Bommarito" src={RyanProfile} />
      </div>
    </section>
  );
}

export default About;
