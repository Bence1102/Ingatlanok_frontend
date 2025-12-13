import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const IngatlanokContext = createContext();

export function IngatlanokProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [ingatlanokLista, setIngatlanokLista] = useState([]);
 
  function ingatlanokRendezese(lista) {
    const ujLista = lista.map((ingatlan) => {
      return {
        ...ingatlan,
      };
    });

    setIngatlanokLista(ujLista);
  }

  function postIngatlan(formAdat) {
    console.log(formAdat);

    axios
      .post("http://0.0.0.0:8000/api/ingatlanok", formAdat)
      .then(function (response) {
        console.log(response);
        getIngatlanok();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getIngatlanok() {
    axios
      .get("http://0.0.0.0:8000/api/ingatlanok")
      .then(function (response) {
        setLoading(false);
        ingatlanokRendezese(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  useEffect(() => {
    getIngatlanok();
  }, []);

  return (
    <IngatlanokContext.Provider
      value={{
        ingatlanokLista,
        loading,
        postIngatlan,
      }}
    >
      {children}
    </IngatlanokContext.Provider>
  );
}
