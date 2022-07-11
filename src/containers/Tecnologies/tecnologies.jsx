import "./styles/tecnologies.scss";
import Icons from "../../assets/icons/tecnologyIcon";

function Tecnologies({innerRef}) {
  return (
    <div className="tecnologies-container" id="tecnologies" ref={innerRef}>
      <h1 id="tecnologies-title">Tecnologies</h1>
      <div className="hexagonos">
      {
                Icons.map(({ name, url }) =>
                <div className="imagenTec" key={`${name}Key`} style={{backgroundImage:`url(${require(`../../assets/images/${url}`)})`}}>
                    {/* <img  className="imgTecnologies" src={require(`../../assets/images/${url}`)} alt={`${name}.png`} /> */}
                    <p>
                        {name}
                    </p>
                </div>
                )
      }
      </div>
    </div>
  );
}

export default Tecnologies;
