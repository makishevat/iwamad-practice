import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { Footer } from "./components/Footer";
import { SkillItem } from "./components/SkillItem";

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

function App() {
  return (
    <>
      <Header title="Student Card" />

      <main>
        <div className="gallery">
          <ProfileCard
            name="Makisheva Tomiris"
            education="Third-year IT Management Student at KBTU"
            gpa="3.52"
            avatarUrl="/Photo_Tomiris.jpg"
            email="you@example.com"
            githubUrl="https://github.com/yourusername"
          />

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
      </main>

      <Footer year={2026} />
    </>
  );
}

export default App;