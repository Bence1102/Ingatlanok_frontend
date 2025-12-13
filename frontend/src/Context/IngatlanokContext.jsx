import axios from "axios";
import {createContext,useState,useEffect,useCallback,} from "react";

export const IngatlanokContext = createContext();

export function IngatlanokProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [osszIngatlan, setOsszIngatlan] = useState([]);
  const [ingatlanokLista, setIngatlanokLista] = useState([]);

  const getIngatlanok = useCallback(() => {
    axios
      .get("http://localhost:8000/api/ingatlanok")
      .then((response) => {
        setLoading(false);
        setOsszIngatlan(response.data);
        setIngatlanokLista(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getKategoriaSzerint(kategoriaId) {
    const szurtLista = osszIngatlan.filter(
      (ingatlan) => ingatlan.kategoriak_id === kategoriaId
    );
    setIngatlanokLista(szurtLista);
  }

  function postIngatlan(formAdat) {
    axios
      .post("http://localhost:8000/api/ingatlanok", formAdat)
      .then(() => {
        getIngatlanok();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getIngatlanok();
  }, [getIngatlanok]);

  return (
    <IngatlanokContext.Provider
      value={{
        ingatlanokLista,
        loading,
        getIngatlanok,
        getKategoriaSzerint,
        postIngatlan,
      }}
    >
      {children}
    </IngatlanokContext.Provider>
  );
}
