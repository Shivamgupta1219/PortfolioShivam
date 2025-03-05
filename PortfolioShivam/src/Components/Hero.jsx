import "./Hero.css";
import profile_img from "../assets/shivamphoto.png";
const Hero = () => {
  return (
    <div className="hero">
      <img
        src={profile_img}
        alt="profile pic"
        className="img-profile"
      />
      {/* <div className="profile-img"></div> */}
      <h1>
        <span>I'm Shivam Gupta,</span> Fronten devloper
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, optio
        ipsa repellat deserunt vitae eveniet voluptatem earum facilis dolores
        quod!
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume" id="hero-connect-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
