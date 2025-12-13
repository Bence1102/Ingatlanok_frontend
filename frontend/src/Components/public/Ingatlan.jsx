import { Link } from "react-router-dom";

export default function Ingatlan({ ingatlan }) {
  return (
    <div className="ingatlan-card">
      <h3>{ingatlan.cim}</h3>
      <p>Ár: {ingatlan.ar} Ft</p>

      <p>
        Kategória: {ingatlan.kategoria?.nev || "Nincs megadva"}
      </p>

      <Link to={`/ingatlan/${ingatlan.id}`}>
        Részletek
      </Link>
    </div>
  );
}
