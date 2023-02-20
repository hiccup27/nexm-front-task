import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { CharacterType } from '../../lib/type';
import './Character.css';

const baseUrl = "https://rickandmortyapi.com/api/character/"

export default function Character() {
  const params = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterType>();

  useEffect(() => {
    fetch(`${baseUrl}${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [params]);

  return (
    <div className="character">
      <button className="character__back" onClick={() => navigate(-1)}>Back</button>
      <h2 className="character__title">{character?.name}</h2>
      <div>
        <img src={character?.image} className="charater__avatar" alt={character?.name} />
        <div className="character__detail">
          <span>Status: {character?.status}</span>
          <span>Species: {character?.species}</span>
          <span>Gender: {character?.gender}</span>
          <span>Origin: {character?.origin.name}</span>
          <span>Last known location: {character?.location.name}</span>
          <span>Number of episodes appearances: {character?.episode.length}</span>
        </div>
      </div>
    </div>
  );
}