import Link from "next/link";
import skillsSummaryStyle from "./skillsSummary.module.css"
import type { Skill } from "../../types"

const SkillsSummary = ({...props}) => {
  const skillsSummary = props.skillsSummary;
  return (
    <ul className={skillsSummaryStyle.skillsSummary}>
        {skillsSummary.map((skill: Skill) => (
            <li key={skill.slug}>
              <Link href={`/projecten/${skill.slug}`}>
                {skill.title}
              </Link>
            </li>
        ))}
    </ul>
  )
}

export default SkillsSummary