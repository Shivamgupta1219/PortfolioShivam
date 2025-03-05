import "./About.css";
import profile_img from "../../assets/shivamphoto.png";

function About() {
  return (
    <div className="about">
      <div className="title-about">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="profile-img" width={'300px'}  style={{borderRadius:'20px', boxShadow:'1px 1px 20px 1px'}}/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              architecto excepturi assumenda odit libero distinctio sunt
              delectus soluta sequi adipisci pariatur rerum quos, ea laudantium
              sapiente accusamus iure id corporis obcaecati commodi sed! Saepe
              ex quibusdam aliquam maiores debitis numquam. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Distinctio repellendus
              reprehenderit vero laborum deleniti corrupti.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo
              voluptatum ullam aliquid aspernatur, accusamus ipsum totam vel in
              eveniet adipisci quas nostrum ab cum. Repellendus dignissimos
              expedita maxime excepturi iusto?
            </p>

          </div>
        </div>
      </div>

      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
        <hr />
      </div> */}
    </div>
  );
}

export default About;
