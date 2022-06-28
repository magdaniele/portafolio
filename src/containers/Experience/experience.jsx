import "./styles/experience.scss";
import Card from "../../components/Card/card";
import imagen from "../../assets/images/background-image2.jpg";

function Experience() {
  return (
    <div className="experience-container">
      <h1 id="experience-title">Experience</h1>
      <section id='experience-section'>
        <Card
          title="Constructora JBG S.A.S "
          src={imagen}
          id="Jbg-pic"
          text="Landing page en codigo nativo"
        />
        <Card
          title="Constructora JBG S.A.S "
          src={imagen}
          id="Jbg-pic"
          text="Landing page en codigo nativo"
        />
        <Card
          title="Constructora JBG S.A.S "
          src={imagen}
          id="Jbg-pic"
          text="Landing page en codigo nativo"
        />
      </section>
    </div>
  );
}

export default Experience;
