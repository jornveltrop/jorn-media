import { useEffect, useState } from "react";
import filterStyle from "./filter.module.css";
import { useRouter } from "next/router";

const Filter = ({ ...props }) => {
  const skills = props.skills;
  const router = useRouter();

  function setQuery(item: any, value: boolean) {
    console.log(item, value);
    let currentQueries: any = router.query.skills;
    let newQueries = [currentQueries];
    console.log(newQueries);

    if (value == true) {
      newQueries.push(item);
    }

    console.log(newQueries);

    router.replace(
      {
        query: {
          skills: { ...newQueries }, // override the color property
        },
      },
      undefined,
      {
        shallow: false,
      }
    );
  }

  return (
    <div className={filterStyle.filter}>
      {skills.map((skillItem: any) => {
        const [skill, setSkill] = useState(true);
        const skillSlug = skillItem.slug;

        function onSkillClick(skillSlug: any) {
          setSkill(!skill);
          setQuery(skillSlug, skill);
          return;
        }

        return (
          <button
            key={skillItem.slug}
            className={`button ${skill == true ? "disabled" : ""}`}
            onClick={() => {
              onSkillClick(skillSlug);
            }}
          >
            {skillItem.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
