import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle-container">
        <div className="preloader__circle"></div>
      </div>
      <p className="preloader__text">Loading...</p>
    </div>
  );
}

export default Preloader;
