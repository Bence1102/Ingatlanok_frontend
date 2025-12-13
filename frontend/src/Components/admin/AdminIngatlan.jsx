import { useState, useEffect } from "react";

function AdminIngatlanSzerkeszto({ ingatlan, onMentes, onMegse }) {
    const [formAdat, setFormAdat] = useState({
        kategoria: "",
        leiras: "",
        tehermentes: false,
        ar: 0,
        kepUrl: "",
    });

    const kategoriak = [
        "Ház",
        "Lakás",
        "Építési telek",
        "Garázs",
        "Mezőgazdasági",
        "Ipari",
        "Egyéb",
    ];

    useEffect(() => {
        if (ingatlan) {
            setFormAdat({
                kategoria:
                    ingatlan.kategoria ||
                    kategoriak[ingatlan.kategoriak_id - 1] ||
                    "Egyéb",
                leiras: ingatlan.leiras || "",
                tehermentes: Boolean(ingatlan.tehermentes),
                ar: ingatlan.ar || 0,
                kepUrl: ingatlan.kepUrl || "",
            });
        }
    }, [ingatlan]);

    if (!ingatlan) return <p>Válassz ki egy ingatlant.</p>;

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormAdat(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onMentes({ ...formAdat, id: ingatlan.id });
    }

    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "2rem auto",
                background: "#fff",
                borderRadius: "6px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                padding: "1.5rem",
            }}
        >
            <h3 style={{ marginBottom: "1rem" }}>
                Ingatlan adatainak szerkesztése
            </h3>

            <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontWeight: "bold" }}>Kép URL</label>
                <input
                    type="text"
                    name="kepUrl"
                    value={formAdat.kepUrl}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "0.5rem" }}
                />
                {formAdat.kepUrl && (
                    <div className="ingatlan-card" style={{ marginTop: "1rem" }}>
                        <img
                            src={`/kepek/${formAdat.kepUrl}`}
                            alt={formAdat.leiras}
                            className="ingatlan-kep"
                            style={{
                                maxWidth: "100%",
                                borderRadius: "4px",
                                border: "1px solid #ddd",
                            }}
                        />
                    </div>
                )}

            </div>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontWeight: "bold" }}>Kategória</label>
                    <select
                        name="kategoria"
                        value={formAdat.kategoria}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "0.5rem" }}
                    >
                        {kategoriak.map(k => (
                            <option key={k} value={k}>
                                {k}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontWeight: "bold" }}>Leírás</label>
                    <textarea
                        name="leiras"
                        value={formAdat.leiras}
                        onChange={handleChange}
                        rows={3}
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontWeight: "bold" }}>Ár (Ft)</label>
                    <input
                        type="number"
                        name="ar"
                        value={formAdat.ar}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label>
                        <input
                            type="checkbox"
                            name="tehermentes"
                            checked={formAdat.tehermentes}
                            onChange={handleChange}
                            style={{ marginRight: "0.5rem" }}
                        />
                        Tehermentes
                    </label>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                    <button
                        type="submit"
                        style={{
                            padding: "0.5rem 1rem",
                            background: "#0d6efd",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                        }}
                    >
                        Mentés
                    </button>

                    <button
                        type="button"
                        onClick={onMegse}
                        style={{
                            marginLeft: "0.5rem",
                            padding: "0.5rem 1rem",
                            background: "#6c757d",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                        }}
                    >
                        Vissza
                    </button>
                </div>
            </form>

            <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666" }}>
                Készítette: Szente Bence és Murai Tamás
            </p>
        </div>
    );
}

export default AdminIngatlanSzerkeszto;
