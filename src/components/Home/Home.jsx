import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1 className="home__title">Food Finder</h1>
      <div className="home__subtext-container">
        <p className="home__subtext">FIND A RECIPE</p>
        <p className="home__subtext">ORDER THE INGREDIENTS</p>
        <p className="home__subtext">ENJOY!</p>
      </div>
      <button className="home__button">Get Started</button>
    </section>
  );
}

export default Home;
