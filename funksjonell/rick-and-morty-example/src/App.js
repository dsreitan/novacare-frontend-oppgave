import React, { useState, useEffect, Suspense, lazy } from "react";
import { getAllCharacters } from "./api";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./App.css";
const Character = lazy(() => import("./Character/Character"));

export const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then(({ results }) => {
      setCharacters(results);
    });
  }, []);

  return (
    <div className="app">
      <MainNavigation />
      <ul className="characters">
        {characters.map((x, i) => (
          <Suspense key={i} fallback={<div key={i}>Loading...</div>}>
            <Character key={i} character={x} />
          </Suspense>
        ))}
      </ul>
    </div>
  );
};

export default App;
