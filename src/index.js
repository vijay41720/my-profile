import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
  return <img src="MyPic.jpg" alt="Vijay" className="avatar"/>
}

function Intro(){
  return(
    <div>
      <h1>Vijaykumar Tirupathi</h1>
      <p>
      Over 1.8 years of experience in the field of testing. Experience in Manual testing on Web and Desktop based applications.
      And I am having the handsone experience as a Full-stack web developer. Looking to switch the domain from the testing field to the
      Full-stack developer field. 
      </p>
    </div>
  );
}

function SkillList(){
  return(
    <div className="skill-list">
      <h3>I am Certified by the below following technologies:</h3>
      <Skill skill="React" emoji="💪" color="blue"/>
      <Skill skill="Python program fundation" emoji="👍" color="orange"/>
      <Skill skill="SQL" emoji="💪" color="pink"/>
      <Skill skill="JavaScript" emoji="💪" color="orangered"/>
      <Skill skill="HTML+CSS" emoji="👍" color="yellow"/>
      <Skill skill="Python Automation" emoji="👍" color="Grey"/>
      <Skill skill="Manual Testing" emoji="👍" color="skyblue"/>
    </div>
  )
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor:props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
