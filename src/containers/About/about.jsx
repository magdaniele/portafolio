import "./styles/about.scss";
import imagen from "../../assets/images/aboutPicture2.jpg";

function About({innerRef}) {
  return (
    <div className="about-container" id="about" ref={innerRef}>
      <div className="about-content">
        <section id="section-pic">
          <div className="about-card">
            <div id="picture-div">
              <div className="backgroundPoints"></div>
              <img id="profile-img" alt="profile" src={imagen} />
              <div className="backgroundAboutPic"></div>
            </div>
          </div>
        </section>
        <section id="section-about">
          <span id="about-title">About</span>
          <div className="about-card" id="textAbout">
            <span id="about-titleSection">Eddy Cardona,
              Developer - FullStack</span>
            <p>
              Soy un ingeniero de sistemas egresado de la Universidad del Norte,
              me encanta la programación y me encuentro siempre en pro de
              aprender nuevas tecnologias. Adicionalmente, en mi tiempo libre me
              gusta salir con amigos, jugar videojuegos y ver series.
            </p>
            <p>Me considero una persona autodidacta, siempre dispuesto al trabajo en equipo y al aprendizaje continuo.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
