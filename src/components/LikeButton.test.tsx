import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LikeButton } from "./LikeButton";
import { LikesProvider } from "../context/LikesContext";

it("increases the like count when clicked", async () => {
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>
  );
  const button = screen.getByRole("button", { name: /like/i });
  expect(button).toHaveTextContent("Like (0)");

  await userEvent.click(button);

  expect(button).toHaveTextContent("Like (1)");
});