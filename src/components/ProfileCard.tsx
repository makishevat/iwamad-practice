import { LikeButton } from "./LikeButton";

type ProfileCardProps = {
  name: string;
  education: string;
  gpa: string;
  avatarUrl: string;
};

export function ProfileCard({
  name,
  education,
  gpa,
  avatarUrl
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
        <LikeButton />
      </div>
    </section>
  );
}