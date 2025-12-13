import { useContext } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";

export default function KategoriaSzuro() {
  const { getIngatlanok } = useContext(IngatlanokContext);

  return (
    <div>
      <button onClick={getIngatlanok}>
        Összes ingatlan
      </button>
    </div>
  );
}
