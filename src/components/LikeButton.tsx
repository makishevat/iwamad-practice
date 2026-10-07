import { useLikes } from "../context/LikesContext";
import { Button } from "./ui/Button";

export function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      className="like-btn"
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      Like ({likes})
    </Button>
  );
}