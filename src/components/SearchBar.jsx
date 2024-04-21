import React, { useContext } from "react";
import { MyContext } from "../hooks/Context";
import { Link } from "react-router-dom";

function SearchBar({ search }) {
  const { data } = useContext(MyContext);

  return (
    <div id="buscador">
      <h1>
        JUEGOS<strong className="free">FREE</strong>.com
      </h1>

      <input
        id="input-buscador__juegos"
        type="search"
        onChange={search}
        placeholder="Buscar juego"
      />

      <section className="genre-list">
        <div>
          {data &&
            data
              .filter(
                (game, index, array) =>
                  array.findIndex(g => g.genre === game.genre) === index
              )
              .map(game => (
                <div key={game.id}>
                  <Link className="genre-list__li" to={`/genres/${game.genre}`}>
                    {game.genre}
                  </Link>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}

export default SearchBar;
