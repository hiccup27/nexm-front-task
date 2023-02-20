import { useState, useEffect } from 'react';
import { CharacterType } from '../../lib/type';
import Pagination from '../Pagination/Pagination';
import { Outlet, Link } from "react-router-dom";
import './Characters.css';

const baseUrl = "https://rickandmortyapi.com/api/character?page="

export default function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [characters, setCharacters] = useState<CharacterType[]>();

  useEffect(() => {
    fetch(`${baseUrl}${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setLastPage(data.info.pages);
        setCharacters(data.results);
      });
  }, [currentPage]);

  return (
    <div className="characters">
      <h2 className="characters__title">Rick and Morty Characters</h2>

      {characters?.map((character) => 
        <Link to={`/${character.id}`}>
          <div className="characters__row" key={character.id}>
            <img src={character.image} className="charaters__image" alt={character.name} />
            <div className="characters__detail">
              <span className="characters__detail__name">{character.name}</span>
              <span>{character.status}</span>
            </div>
          </div>
        </Link>
      )}

      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}