import { Tag } from "./ui/Tag";

type Skill = {
  id: number;
  label: string;
};

type SkillItemProps = {
  skill: Skill;
};

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <li className="skill-item">
      <Tag label={skill.label} />
    </li>
  );
}