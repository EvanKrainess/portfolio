import './Experience.css'
import '../ExperienceNode/ExperienceNode'
import ExperienceNode from '../ExperienceNode/ExperienceNode'

export default function Experience(){

    return(

<div className="experience-section">
  <h1>Experience</h1>

  <div className="timeline">
      <ExperienceNode
        className="experience-node"
        imgPath="./images/Capital_One_logo.svg.png"
        title="Associate Software Engineer, Capital One"
        startDate="August 2025"
        endDate="Present"
      />

    <div className="vertical-line"></div>

      <ExperienceNode
        className="experience-node"
        imgPath="./images/daikin.png"
        title="Software Engineer Intern, Daikin Applied Americas"
        description="Implemented an interface to a testing framework using Angular that supported the creation of automated tests."
        startDate="May 2024"
        endDate="August 2024"
      />
  </div>




</div>
    )
}