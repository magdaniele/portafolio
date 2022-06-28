import "./styles/about.scss";
import imagen from "../../assets/images/background-image2.jpg";

function About() {
  return (
    <div className="about-container">
      <h1 id="about-title">About</h1>
      <div className="about-card">
        <section id="section-pic">
          <div id="picture-div">
            <img id="profile-img" alt="profile" src={imagen} />
            <h2>Eddy Cardona</h2>
            <h3>Developer - FullStack</h3>
          </div>
        </section>
        <section id="section-about">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
