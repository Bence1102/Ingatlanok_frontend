import { useContext, useState, useEffect } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";

function AdminIngatlanok({ onSzerkeszt }) {
  const { ingatlanokLista, loading } = useContext(IngatlanokContext);
  const [kategoria, setKategoria] = useState("Összes");
  const [szurtLista, setSzurtLista] = useState([]);

  const kategoriak = ["Összes", ...new Set(ingatlanokLista.map(i => i.kategoria || "Ismeretlen"))];

  useEffect(() => {
    if (kategoria === "Összes") {
      setSzurtLista(ingatlanokLista);
    } else {
      setSzurtLista(ingatlanokLista.filter(i => i.kategoria === kategoria));
    }
  }, [kategoria, ingatlanokLista]);

  if (loading) return <p>Betöltés...</p>;
  if (!ingatlanokLista.length) return <p>Nincs elérhető ingatlan.</p>;

  return (
    <>
      <label>
        Válassz kategóriát:
        <select value={kategoria} onChange={e => setKategoria(e.target.value)}>
          {kategoriak.map(k => (
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
          {szurtLista.map((ingatlan) => (
            <tr key={ingatlan.id} style={{ borderBottom: "1px solid #ccc" }}>
              <td>{ingatlan.id}</td>
              <td>{ingatlan.tipus}</td>
              <td>{ingatlan.cim || ingatlan.nev}</td>
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
