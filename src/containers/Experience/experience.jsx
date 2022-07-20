import "./styles/experience.scss";
import Card from "../../components/Card/card";
import JbgLogo from "../../assets/images/JBGlogo.png";
import TwitterLogo from "../../assets/images/Twitter.png";
import FootballLogo from "../../assets/images/Football.png";
import diabetesAssistantLogo from "../../assets/images/diabetesAssistant.png";
import ApiLogo from "../../assets/images/API.png";
import FormularioLogo from "../../assets/images/Formulario.png";

function Experience({ innerRef }) {
  return (
    <div className="experience-container" id="experience" ref={innerRef}>
      <h1 id="experience-title">Experience</h1>
      <section id="experience-section">
        <Card
          id="Jbg-div"
          title="Constructora JBG S.A.S "
          src={JbgLogo}
          idImg="Jbg-pic"
          text="Landing page desarrollada para una constructora utilizando Html, Css, Javascript y Bootstrap unicamente."
          url="https://juanbgomez.com"
        />
        <Card
          id="Twitter-div"
          title="Twitter Simulator"
          src={TwitterLogo}
          idImg="Twitter-pic"
          text="Aplicacion Frontend simulando la red social Twitter utilizando Nodeje, React, Sass, Firebase y Jwtoken"
          url="https://twitter-frontendun.web.app/"
          github="https://github.com/magdaniele/Twitter-Frontend-Project"
        />
        <Card
          id="Football-div"
          title="Football-project"
          src={FootballLogo}
          idImg="Football-pic"
          text="Primer proyecto de React con nx para el consumo de una api gratuita utilizando typescript y desplegandola en vercel"
          url="https://football-project.vercel.app"
          github="https://github.com/magdaniele/Football-project"
        />
        <Card
          id="DiabetesAssistant-div"
          title="DiabetesAssistant-project"
          src={diabetesAssistantLogo}
          idImg="DiabetesAssistant-pic"
          text="Primer proyecto de React con nx para el consumo de una api gratuita utilizando typescript y desplegandola en vercel"
          github="https://github.com/magdaniele/Football-project"
        />
        <Card
          id="Api-div"
          title="Api-project"
          src={ApiLogo}
          idImg="Api-pic"
          text="Simulación de una api para una aplicacion de gestion de usuarios y tweets utilizando Nodejs, Express, MongoDB, Mongoose, Bcrypt y Jwt"
          github="https://github.com/magdaniele/Trinos-api-project.git"
        />
        <Card
          id="Formulario-div"
          title="Formulario-project"
          src={FormularioLogo}
          idImg="Formulario-pic"
          text="Proyecto basado en macros de visual basic para el desarrollo una base de datos de una tienda en excel con un dashboard de visualizacion y tablas dinamicas"
          github="https://github.com/magdaniele/Formulario.git"
        />
      </section>
    </div>
  );
}

export default Experience;
