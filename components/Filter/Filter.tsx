import { useState } from "react";
import filterStyle from "./filter.module.css";
import { useRouter } from "next/router";
import type { Skill } from "../../types";

const Filter = ({ ...props }) => {
  const skills = props.skills;
  const router = useRouter();

  const [activeSkills, setActiveSkills] = useState<Record<string, boolean>>({});

  function setQuery(item: string, value: boolean) {
    let currentQueries = router.query.skills as string | undefined;
    let newQueries = currentQueries ? [currentQueries] : [];

    if (value === true) {
      newQueries.push(item);
    }

    router.replace(
      {
        query: {
          skills: newQueries,
        },
      },
      undefined,
      {
        shallow: false,
      }
    );
  }

  function onSkillClick(skillSlug: string) {
    const currentValue = activeSkills[skillSlug] ?? true;
    const newValue = !currentValue;

    setActiveSkills({
      ...activeSkills,
      [skillSlug]: newValue,
    });

    setQuery(skillSlug, currentValue);
  }

  return (
    <div className={filterStyle.filter}>
      {skills.map((skillItem: Skill) => {
        const skillSlug = skillItem.slug;
        const skill = activeSkills[skillSlug] ?? true;

        return (
          <button
            key={skillItem.slug}
            className={`button ${skill === true ? "disabled" : ""}`}
            onClick={() => onSkillClick(skillSlug)}
          >
            {skillItem.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;