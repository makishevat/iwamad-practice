import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="gallery">
      <section className="card">
        <div className="card-text">
          <h2>Page not found</h2>
          <Link to="/">Back home</Link>
        </div>
      </section>
    </div>
  );
}