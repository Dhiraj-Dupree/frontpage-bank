import bankImage from "../assets/bank-img.jpg";
const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bankImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
        }}
        className="hero"
      >
        <div className="card">
          <h1>Welcome!</h1>
          <p className="heroPar">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            quo eum vero repellendus nobis ipsum, ipsam ab culpa a incidunt
            quaerat facere molestias adipisci quibusdam voluptatum! Culpa libero
            cum ullam!
          </p>
          <button>SIgn Up</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
