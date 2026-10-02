import { ProfileCard } from "../components/ProfileCard";

export function HomePage() {
  return (
    <div className="gallery">
      <ProfileCard
        name="Makisheva Tomiris"
        education="Third-year IT Management Student at KBTU"
        gpa="3.52"
        avatarUrl={`${import.meta.env.BASE_URL}Photo_Tomiris.jpg`}
      />
    </div>
  );
}