import skills_summary_style from "./Skills_summary.module.css"

const Skills_summary = ({...props}) => {
  const skills_summary = props.skills_summary;

  return (
    <ul className={skills_summary_style.skills_summary}>
        {skills_summary.map((skill: { skillText: String }) => (
            <li>{skill.skillText}</li>
        ))}
    </ul>
  )
}

export default Skills_summary