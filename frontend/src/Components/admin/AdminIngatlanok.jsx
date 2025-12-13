import { useContext, useState, useEffect } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";

function AdminIngatlanok({ onSzerkeszt }) {
  const { ingatlanokLista, loading } = useContext(IngatlanokContext);
  const [kategoria, setKategoria] = useState("Összes");
  const [szurtLista, setSzurtLista] = useState([]);

  const kategoriak = {
    1: "Ház",
    2: "Lakás",
    3: "Építési telek",
    4: "Garázs",
    5: "Mezőgazdasági",
    6: "Ipari",
  };

  const alapKategoriak = [
    "Összes",
    "Ház",
    "Garázs",
    "Lakás",
    "Építési telek",
    "Ipari",
    "Mezőgazdasági",
    "Egyéb"
  ];

  useEffect(() => {
    if (kategoria === "Összes") {
      setSzurtLista(ingatlanokLista);
    } else if (kategoria === "Egyéb") {
      setSzurtLista(
        ingatlanokLista.filter(i => !Object.values(kategoriak).includes(kategoriak[i.kategoriak_id]))
      );
    } else {
      setSzurtLista(
        ingatlanokLista.filter(i => kategoriak[i.kategoriak_id] === kategoria)
      );
    }
  }, [kategoria, ingatlanokLista]);

  if (loading) return <p>Betöltés...</p>;
  if (!ingatlanokLista.length) return <p>Nincs elérhető ingatlan.</p>;

  return (
    <>
      <label>
        Válassz típust:
        <select value={kategoria} onChange={e => setKategoria(e.target.value)}>
          {alapKategoriak.map(k => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
      </label>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Típus</th>
            <th>Cím</th>
            <th>Ár</th>
            <th>Tehermentes</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {szurtLista.map(ingatlan => (
            <tr key={ingatlan.id} style={{ borderBottom: "1px solid #ccc" }}>
              <td>{ingatlan.id}</td>
              <td>{kategoriak[ingatlan.kategoriak_id] || "Egyéb"}</td>
              <td>{ingatlan.leiras}</td>
              <td>{ingatlan.ar.toLocaleString("hu-HU")} Ft</td>
              <td>{ingatlan.tehermentes ? "Igen" : "Nem"}</td>
              <td>
                <button onClick={() => onSzerkeszt(ingatlan)}>Szerkesztés</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminIngatlanok;
