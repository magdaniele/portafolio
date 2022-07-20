import "./styles/card.scss";
import Icons from "../../assets/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const { id, idImg, src, title, text, url, github } = props;
  return (
    <div className="flip-card" id={id}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            loading="lazy"
            className="card"
            src={src}
            alt="Avatar"
            id={idImg}
          />
        </div>
        <div className="flip-card-back">
          <h1>{title}</h1>
          <p>{text}</p>
          <div>
            {url ? (
              <a href={url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEye}/> Demo
              </a>
            ) : (
              ""
            )}
            {github ? (
              <a href={github} target="_blank" rel="noreferrer">
                <svg {...Icons.Socialmedia.Github.props}/>
                Github
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
