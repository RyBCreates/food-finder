import { Link } from "react-router-dom";
import "./Home.css";
import AuthButtons from "../AuthButtons/AuthButtons";

function Home({ isLoggedIn }) {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">FOOD FINDER</h1>
        <div className="home__subtext-container">
          <p className="home__subtext">FIND A RECIPE</p>
          <p className="home__subtext">ORDER THE INGREDIENTS</p>
          <p className="home__subtext">ENJOY!</p>
        </div>
        {isLoggedIn ? (
          <Link to="/recipes" className="home__button">
            Get Started
          </Link>
        ) : (
          <AuthButtons />
        )}
      </div>
    </section>
  );
}

export default Home;
