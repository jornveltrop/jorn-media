import { useEffect, useState } from "react";
import filterStyle from "./filter.module.css"
import { useRouter } from 'next/router'

const Filter = ({...props}) => {
    const skills = props.skills
    const router = useRouter();
    let selectedSkills: any[] = []
    console.log(selectedSkills)
    
    function setQuery (item: any, value: boolean){
      console.log(item, value)
      let currentQueries:any = router.query.skills
      let newQueries

      if (value == false) {
        
        if (currentQueries != undefined) {
          if(currentQueries.indexOf(item) !== -1) {  
            return
          } else {  
            newQueries = [currentQueries, item]
          }
        } else newQueries = [item]

      } else if (value == true) {
        console.log(currentQueries + "test")
        let currentArray = 
        currentQueries.splice(currentQueries.indexOf(item), 1);
        newQueries = currentQueries

        router.replace({
          query:  {
            skills: newQueries // override the color property
          },
        },
        undefined,
        {
          shallow: false,
        },
      );
      }

      
      router.replace({
        query:  {
          skills: newQueries[0] // override the color property
        },
      },
      undefined,
      {
        shallow: false,
      },
    );

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