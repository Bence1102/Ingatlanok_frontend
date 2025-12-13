import { useContext, useEffect } from "react";
import { IngatlanokContext } from "../../Context/IngatlanokContext";
import Ingatlan from "./Ingatlan";

export default function Ingatlanok() {
  const { ingatlanokLista, getIngatlanok } =
    useContext(IngatlanokContext);

  useEffect(() => {
    getIngatlanok();
  }, [getIngatlanok]);

  return (
    <div>

      <div className="ingatlan-lista">
        {ingatlanokLista.map((ingatlan) => (
          <Ingatlan key={ingatlan.id} ingatlan={ingatlan} />
        ))}
      </div>
    </div>
  );
}
