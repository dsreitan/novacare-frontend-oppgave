import React from "react";
import "./Character.css";

export const Character = ({ character }) => {
  return (
    <li className="character">
      <img src={character.image} alt={character.name} />
      <ul className="personalia">
        <li>Navn: {character.name}</li>
        <li>Status: {character.status}</li>
        <li>Art: {character.species}</li>
        <li>Kjønn: {character.gender}</li>
        <li>Planet: {character.origin?.name}</li>
        <li>Sist sett: {character.location?.name}</li>
        <li>Antall episoder: {character.episode?.length}</li>
      </ul>
    </li>
  );
};

export default Character;
