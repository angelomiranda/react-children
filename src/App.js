import React from "react";

import FavoriteShows from "./components/FavoriteShows";
import ProfileHome from "./components/ProfileHome";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProfileHome userId="broadwaycom">
          {({ data }) => {
            if (data == null) {
              return <div>Loading Shows....</div>;
            } else {
              return <FavoriteShows shows={data} />;
            }
          }}
        </ProfileHome>
      </div>
    );
  }
}

export default App;
