import sign from "../assets/signing2.jpg";

const signUp = () => {
  return (
    <div>
      <div
        className="signUp"
        style={{
          backgroundImage: `url(${sign})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
        }}
      >
        <div className="card">
          <h3>
            <em>Sign Up Today!</em>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              impedit officia dolor fugit, illum possimus veritatis eum error
              doloremque ea at numquam temporibus in optio quisquam cum beatae
              dolore voluptates.
            </p>
            <button>Sign Up</button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default signUp;
