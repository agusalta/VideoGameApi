import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../hooks/Context";
import { Link, useParams } from "react-router-dom";

function GameId() {
  const [game, setGame] = useState({});
  const { data } = useContext(MyContext);
  const { gameId } = useParams();

  useEffect(() => {
    if (data) {
      const gameById = data.find(item => String(item.id) === gameId);

      if (gameById) {
        setGame(gameById);
      }
    }
  }, [data, gameId]);

  return (
    <div className="gameId-container">
      <div className="game-info">
        <div className="game-details">
          <h1>{game.title}</h1>
          <p>
            <strong>Descripción:</strong> {game.short_description}
          </p>
          <p>
            <strong>Género:</strong> {game.genre}
          </p>
          <p>
            <strong>Fecha de lanzamiento:</strong> {game.release_date}
          </p>
          <p>
            <strong>Plataforma:</strong> {game.platform}
          </p>
          <Link className="back-button" to="/">
            VOLVER AL INICIO
          </Link>
        </div>
        <div className="game-image">
          <img src={game.thumbnail} alt={gameId} />
        </div>
      </div>
    </div>
  );
}

export default GameId;
