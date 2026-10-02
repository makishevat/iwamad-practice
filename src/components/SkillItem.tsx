type Skill = {
  id: number;
  label: string;
};

type SkillItemProps = {
  skill: Skill;
};

export function SkillItem({ skill }: SkillItemProps) {
  return <li className="skill-item">{skill.label}</li>;
}