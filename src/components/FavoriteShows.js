import React from "react";

function FavoriteShows({ shows }) {
  function displayBroadwayShows() {
    return shows
      .filter(show => show.category === "broadway")
      .map(show => {
        return (
          <li>{show.title}</li>
        )
      });
  }

  return (
    <div>
      <h1>Favorite Shows</h1>
      <ul>{displayBroadwayShows()}</ul>
    </div>
  )
}

export default FavoriteShows;
