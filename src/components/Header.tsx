import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <span className="likes-count">♥ {likes}</span>
    </header>
  );
}