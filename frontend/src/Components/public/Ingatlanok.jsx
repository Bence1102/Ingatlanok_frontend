import { useContext, useState } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";
import Ingatlan from "./Ingatlan";

export default function Ingatlanok() {
  const {
    ingatlanokLista,
    loading,
    getIngatlanok,
    getKategoriaSzerint,
  } = useContext(IngatlanokContext);

  const [kategoriaId, setKategoriaId] = useState("");

  function handleKategoriaValtas(e) {
    const value = e.target.value;
    setKategoriaId(value);

    if (value === "") {
      getIngatlanok();
    } else {
      getKategoriaSzerint(Number(value));
    }
  }

  if (loading) {
    return <p>Ingatlanok betöltése...</p>;
  }

  return (
    <div>
      <label>
        Kategória:&nbsp;
        <select value={kategoriaId} onChange={handleKategoriaValtas}>
          <option value="">Válassz kategóriát</option>
          <option value="1">Ház</option>
          <option value="2">Lakás</option>
          <option value="3">Építési telek</option>
          <option value="4">Garázs</option>
          <option value="5">Mezőgazdasági</option>
          <option value="6">Ipari</option>
        </select>
      </label>

      <div className="ingatlan-grid">
        {ingatlanokLista.map((ingatlan) => (
          <Ingatlan key={ingatlan.id} ingatlan={ingatlan} />
        ))}
      </div>
    </div>
  );
}
