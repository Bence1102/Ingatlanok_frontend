import { useContext } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";

export default function Ingatlan({ ingatlan }) {
  const { getKategoriaSzerint } = useContext(IngatlanokContext);

  const kategoriak = {
    1: "Ház",
    2: "Lakás",
    3: "Építési telek",
    4: "Garázs",
    5: "Mezőgazdasági",
    6: "Ipari",
  };

  return (
    <div className="ingatlan-card">
      <img
        src={`/kepek/${ingatlan.kepUrl}`}
        alt={ingatlan.leiras}
        className="ingatlan-kep"
      />

      <div className="ingatlan-tartalom">
        <h3>{kategoriak[ingatlan.kategoriak_id]}</h3>

        <p className="leiras">{ingatlan.leiras}</p>

        <p className="ar">
          {ingatlan.ar.toLocaleString("hu-HU")} Ft
        </p>

        <p className={ingatlan.tehermentes ? "ok" : "nem-ok"}>
          {ingatlan.tehermentes ? "Tehermentes" : "Nem tehermentes"}
        </p>

        <button
          onClick={() => getKategoriaSzerint(ingatlan.kategoriak_id)}
        >
          Hasonló ingatlanok
        </button>
      </div>
    </div>
  );
}
