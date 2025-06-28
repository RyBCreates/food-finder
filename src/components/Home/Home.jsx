import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">FOOD FINDER</h1>
        <div className="home__subtext-container">
          <p className="home__subtext">FIND A RECIPE</p>
          <p className="home__subtext">ORDER THE INGREDIENTS</p>
          <p className="home__subtext">ENJOY!</p>
        </div>
        <button className="home__button">Get Started</button>
      </div>
    </section>
  );
}

export default Home;
