import { useContext } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";
import Ingatlan from "./Ingatlan";

export default function Ingatlanok() {
  const { ingatlanokLista, loading } =
    useContext(IngatlanokContext);

  if (loading) {
    return <p className="loading">Ingatlanok betöltése...</p>;
  }

  return (
    <div className="ingatlan-oldal">
      <h1>Ingatlan kínálat</h1>

      <div className="ingatlan-grid">
        {ingatlanokLista.map((ingatlan) => (
          <Ingatlan
            key={ingatlan.id}
            ingatlan={ingatlan}
          />
        ))}
      </div>
    </div>
  );
}
