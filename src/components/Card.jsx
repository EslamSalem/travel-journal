import "../styles/Card.css"

export default function Card(props) {
  return (
    <div className="card">
      <img src="/images/japan.png" className="card-img" />
      <div className="card-text">
        <h3 className="card-location">
          <img src="/images/pin.png" className="maps-pin" />
          <span className="country"> JAPAN </span>
          <a href="" target="_blank" className="maps-link">
            View on Google Maps
          </a>
        </h3>
        <h1 className="card-title">Mount Fuji</h1>
        <h3 className="card-date">12 Jan, 2021 - 24 Jan, 2021</h3>
        <p className="card-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
