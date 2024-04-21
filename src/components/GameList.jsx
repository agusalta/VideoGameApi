import React, { useContext, useState } from "react";
import Game from "./Game";
import { MyContext } from "../hooks/Context";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function GameList() {
  const [searchGame, setSearchGame] = useState("");

  const { data } = useContext(MyContext);

  const handleSearch = event => {
    setSearchGame(event.target.value);
  };

  console.log(data);

  return (
    <main className="app-container">
      <SearchBar search={handleSearch} />

      <section className="games-container">
        {!data ? (
          <p>Cargando...</p>
        ) : (
          <>
            {!searchGame &&
              data.map(item => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/games/${item.id}`}
                  key={item.id}
                >
                  <Game
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    short_description={item.short_description}
                    genre={item.genre}
                    release_date={item.release_date}
                    platform={item.platform}
                    url={item.url}
                    publisher={item.publisher}
                  />
                </Link>
              ))}
            {searchGame &&
              data
                .filter(item =>
                  item.title.toLowerCase().startsWith(searchGame.toLowerCase())
                )
                .map(item => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/games/${item.id}`}
                    key={item.id}
                  >
                    <Game
                      id={item.id}
                      title={item.title}
                      thumbnail={item.thumbnail}
                      short_description={item.short_description}
                      genre={item.genre}
                      release_date={item.release_date}
                      platform={item.platform}
                      url={item.url}
                      publisher={item.publisher}
                    />
                  </Link>
                ))}
          </>
        )}
      </section>
    </main>
  );
}

export default GameList;
