import "../styles/Card.css"

export default function Card(props) {
  return (
    <div className="card">
     <img src={`/images/${props.coverImg}`} className="card-img" />
      <div className="card-text">
        <h3 className="card-location">
          <img src="/images/pin.png" className="maps-pin" />
          <span className="country"> {props.country} </span>
          <a href={props.mapsLink} target="_blank" className="maps-link">
            View on Google Maps
          </a>
        </h3>
        <h1 className="card-title">{props.title}</h1>
        <h3 className="card-date">{props.date}</h3>
        <p className="card-description">
          {props.description}
        </p>
      </div>
    </div>
  );
}
