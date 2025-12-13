import { useState, useEffect } from "react";

function AdminIngatlanSzerkeszto({ ingatlan, onMentes, onMegse }) {
  const [formAdat, setFormAdat] = useState({
    tipus: "",
    cim: "",
    ar: 0,
    tehermentes: false,
    kategoria: "",
  });

  useEffect(() => {
    if (ingatlan) {
      setFormAdat({
        tipus: ingatlan.tipus || "",
        cim: ingatlan.cim || ingatlan.nev || "",
        ar: ingatlan.ar || 0,
        tehermentes: ingatlan.tehermentes || false,
        kategoria: ingatlan.kategoria || "",
      });
    }
  }, [ingatlan]);

  if (!ingatlan) return <p>Válassz ki egy ingatlant a szerkesztéshez.</p>;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormAdat((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onMentes(formAdat);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <div>
        <label>Típus:</label>
        <input name="tipus" value={formAdat.tipus} onChange={handleChange} required />
      </div>
      <div>
        <label>Cím:</label>
        <input name="cim" value={formAdat.cim} onChange={handleChange} required />
      </div>
      <div>
        <label>Ár (Ft):</label>
        <input
          name="ar"
          type="number"
          value={formAdat.ar}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>
          <input
            name="tehermentes"
            type="checkbox"
            checked={formAdat.tehermentes}
            onChange={handleChange}
          />
          Tehermentes
        </label>
      </div>
      <div>
        <label>Kategória:</label>
        <input name="kategoria" value={formAdat.kategoria} onChange={handleChange} />
      </div>
      <button type="submit">Mentés</button>
      <button type="button" onClick={onMegse} style={{ marginLeft: "1rem" }}>
        Mégse
      </button>
    </form>
  );
}

export default AdminIngatlanSzerkeszto;
