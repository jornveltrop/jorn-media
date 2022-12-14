import Link from "next/link";
import skillsSummaryStyle from "./skillsSummary.module.css"

const SkillsSummary = ({...props}) => {
  const skillsSummary = props.skillsSummary;
  return (
    <ul className={skillsSummaryStyle.skillsSummary}>
        {skillsSummary.map((skill: { [key:string]: any }) => (
            <li key={skill.slug}>
              <Link href={`/projecten/${skill.slug}`}>
                <a>
                  {skill.title}
                </a>
              </Link>
            </li>
        ))}
    </ul>
  )
}

export default SkillsSummary