import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <main className="container">
      <header>
        <Navigation />
      </header>

      <article>
        <Outlet /> {}
      </article>

      <footer>
        <p>Készítette: Szente Bence és Murai Tamás</p>
      </footer>
    </main>
  );
}

export default Layout;
