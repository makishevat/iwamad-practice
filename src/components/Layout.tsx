import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <Header title="Student Card" />
      <main>
        <Outlet />
      </main>
      <Footer year={2026} />
    </>
  );
}