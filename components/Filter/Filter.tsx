import { useEffect, useState } from "react";
import filterStyle from "./filter.module.css"
import { useRouter } from 'next/router'

const Filter = ({...props}) => {
    const skills = props.skills
    
    function setQuery (item: any, value: boolean){
      console.log(item, value)
    }

  return (
    <div className={filterStyle.filter}>
        {skills.map((skillItem: any) => {
            const [skill, setSkill] = useState(false);
            const skillSlug = skillItem.slug;

              function onSkillClick(skillSlug: any) {
                setSkill(!skill)
                setQuery(skillSlug, skill)
                return
              } 


            return (
                <button key={skillItem.slug} className={`button ${skill == false ? 'active' : ''}`} onClick={() => {onSkillClick(skillSlug)}}>{skillItem.title}</button>
            )
        })}
    </div>
  )
}



  

export default Filter