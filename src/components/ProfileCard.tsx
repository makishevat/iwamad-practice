import { LikeButton } from "./LikeButton";

type ProfileCardProps = {
  name: string;
  education: string;
  gpa: string;
  avatarUrl: string;
  email: string;
  githubUrl: string;
};

export function ProfileCard({
  name,
  education,
  gpa,
  avatarUrl,
  email,
  githubUrl,
}: ProfileCardProps) {
  return (
    <section className="card">
      <img src={avatarUrl} alt={name} className="avatar" />
      <div className="card-text">
        <h2>About me</h2>
        <p>
          Name: {name}
          <br />
          Education: {education}
          <br />
          GPA: {gpa}
        </p>
        <div className="links">
          <a href={`mailto:${email}`}>Email</a>
          <a href={githubUrl}>GitHub</a>
        </div>
        <LikeButton />
      </div>
    </section>
  );
}