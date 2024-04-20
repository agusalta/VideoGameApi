import React from "react";

function Game({
  id,
  title,
  thumbnail,
  short_description,
  genre,
  release_date,
  platform,
}) {
  return (
    <div className="game-container">
      <h2>{title}</h2>
      <img src={thumbnail} alt={id} />
      <p>
        <strong>Descripción:</strong> {short_description}
      </p>
      <p>
        <strong>Genero:</strong> {genre}
      </p>
      <p>
        <strong>Fecha de lanzamiento:</strong> {release_date}
      </p>
      <p>
        <strong>Plataforma:</strong> {platform}
      </p>
    </div>
  );
}

export default Game;
