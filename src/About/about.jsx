import SecondBank from "../assets/1.jpg";

const About = () => {
  return (
    <div>
      <div
        className="AboutSection"
        style={{
          backgroundImage: `url(${SecondBank})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
        }}
      >
        <div className="card">
          <h2>About</h2>
          <div className="AboutPars">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              neque velit? Reprehenderit laborum nemo recusandae omnis et
              ducimus? Rem earum quis odit culpa architecto? Porro pariatur quis
              sequi sint rerum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              neque velit? Reprehenderit laborum nemo recusandae omnis et
              ducimus? Rem earum quis odit culpa architecto? Porro pariatur quis
              sequi sint rerum?
            </p>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
