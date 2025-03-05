import "./skill.css";
import HtmlLogo from "../assets/html.svg"; // Adjust path as needed
import Css_logo from "../assets/css.svg"; // Adjust path as needed
import java_logo from "../assets/java.svg"; // Adjust path as needed
import bootstrap_logo from "../assets/bootstrap.svg"; // Adjust path as needed
import node_logo from "../assets/node.svg"; // Adjust path as needed
import c_plus_logo from "../assets/c_plus.svg"; // Adjust path as needed
import react_js from "../assets/react.svg"; // Adjust path as needed

function Skill() {
  return (
    <>
      <div className="skill-section">
        <div className="title">
          <h1>My Skills</h1>
        </div>
        <div className="skill-container">
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={HtmlLogo} alt="htmllogo"className="img-size" />
              </div>
              <h3>HTML</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={Css_logo} alt=""  className="img-size"/>
              </div>
              <h3>CSS</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={java_logo} alt="javaScript" 
                className="img-size"/>
              </div>

              <h3>JavaScript</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={react_js} alt="react.js"
                className="img-size" />
              </div>
              <h3>REACtJs</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={java_logo} alt="java"
                className="img-size" />
              </div>

              <h3>JAVA</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={c_plus_logo} alt="c++"
                className="img-size" />
              </div>

              <h3>C++</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img src={bootstrap_logo} alt="Bootstrap" 
                className="img-size" />
              </div>
              <h3>BootStrap</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          <div className="skil-box">
            <div className="skill-titile">
              <div className="img_container">
                <img
                  src={node_logo}
                  alt="node.js"
                  style={{ borderRadius: "5px" }}
                  className="img-size"
                />
              </div>
              <h3>NODE.Js</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div>
          {/* <div className="skil-box">
            <div className="skill-titile">
              <img src={bootstrap_logo} alt="" />
              <h3>BootStrap</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti quas minima cupiditate atque magni aspernatur enim
                doloribus sapiente minus impedit?
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Skill;
