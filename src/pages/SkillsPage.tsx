import { SkillItem } from "../components/SkillItem";

type Skill = {
  id: number;
  label: string;
};

const skills: Skill[] = [
  { id: 1, label: "HTML" },
  { id: 2, label: "CSS" },
  { id: 3, label: "JavaScript" },
  { id: 4, label: "Python" },
  { id: 5, label: "SQL" },
];

export function SkillsPage() {
  return (
    <div className="gallery">
      <section className="card">
        <div className="card-text">
          <h2>Skills</h2>

          {skills.length === 0 && <p>No skills added yet.</p>}

          {skills.length > 0 && (
            <ul className="skills-list">
              {skills.map((skill) => (
                <SkillItem key={skill.id} skill={skill} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}