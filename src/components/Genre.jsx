import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../hooks/Context";
import Game from "./Game";

function Genre() {
  const { gameGenre } = useParams();
  const [genreList, setGenre] = useState([]);
  const { data } = useContext(MyContext);

  useEffect(() => {
    if (data) {
      const genreBySearch = data.filter(
        data => String(data.genre).toLowerCase() === gameGenre.toLowerCase()
      );

      if (genreBySearch) {
        setGenre(genreBySearch);
      }
    }
  }, [data, gameGenre]);

  console.log(genreList);

  return (
    <div>
      <Link className="back-button" to="/">VOLVER AL INICIO</Link>
      <section className="games-container">
        {genreList &&
          genreList.map(item => (
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
      </section>
    </div>
  );
}

export default Genre;
