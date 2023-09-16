import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Python programming",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },
  {
    skill: "Python Automation",
    level: "intermediate",
    color: "#FF3B00"
  },
  {
    skill: "Manual testing",
    level: "advanced",
    color: "#FF3B00"
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "#FF3B00"
  }
];

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
      {skills.map(skill=><Skill skill={skill.skill} level={skill.level} color={skill.color}/>)}
    </div>
  )
}

function Skill({skill,level,color}){
  return(
    <div className="skill" style={{backgroundColor:color}}>
      <span>{skill}</span>
      <span>
        {level==='advanced' && "💪"}
        {level==='intermediate' && "👍"}
        {level==='beginner' && "👶"}
      </span>
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
