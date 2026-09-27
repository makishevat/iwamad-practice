import { useState } from "react";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { Footer } from "./components/Footer";

function App() {
  const [liked, setLiked] = useState(false);

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
        </div>

        <button
          className={`like-btn${liked ? " liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "Liked" : "Like"}
        </button>
      </main>

      <Footer year={2026} />
    </>
  );
}

export default App;