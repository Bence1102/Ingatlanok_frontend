import { useState, useContext } from "react";
import AdminIngatlanok from "../Components/admin/AdminIngatlanok";
import AdminIngatlan from "../Components/admin/AdminIngatlan";
import { IngatlanokContext } from "../Context/IngatlanokContext";

function Admin() {
  const { ingatlanokLista, loading, getIngatlanok } = useContext(IngatlanokContext);
  const [kivalasztott, setKivalasztott] = useState(null);

  function onSzerkeszt(ingatlan) {
    setKivalasztott(ingatlan);
  }

  function onMentes(formAdat) {

    console.log("Mentés:", formAdat);

    getIngatlanok();
    setKivalasztott(null);
  }

  function onMegse() {
    setKivalasztott(null);
  }

  if (loading) return <p>Betöltés...</p>;

  return (
    <div>
      <h1>Admin oldal</h1>

      {!kivalasztott && <AdminIngatlanok onSzerkeszt={onSzerkeszt} />}

      {kivalasztott && (
        <AdminIngatlan
          ingatlan={kivalasztott}
          onMentes={onMentes}
          onMegse={onMegse}
        />
      )}
    </div>
  );
}

export default Admin;
