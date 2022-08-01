import "./styles/tecnologies.scss";
import tecnoIcons from "../../assets/icons/icons";

function Tecnologies({innerRef}) {
  const Icons = tecnoIcons.Tecnologies;
  return (
    <div className="tecnologies-container" id="tecnologies" ref={innerRef}>
      <h1 id="tecnologies-title">Tecnologies</h1>
      <div className="hexagonos">
      {
                Icons.map(({ name, path }) =>
                <div className="imagenTec" key={`${name}Key`} style={{backgroundImage:`url(${require(`../../assets/images/svg/${path}`)})`}}>
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
