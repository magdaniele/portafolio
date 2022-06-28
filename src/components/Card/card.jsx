import "./styles/card.scss";

function Card(props) {
    const {id, src, title, text} = props;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
          className="card"
            src={src}
            alt="Avatar"
            id={id}
          />
        </div>
        <div className="flip-card-back">
          <h1>{title}</h1>
          <p>{text}</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
