export const getFavoriteShowsByUserId = userId => {
  if (userId === "broadwaycom") {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            title: "Aladdin",
            category: "broadway",
            url: "/aladdin"
          },
          {
            title: "Game of Throne",
            category: "tv-show",
            url: "/gameOfThrone"
          },
          {
            title: "Stomp",
            category: "off-broadway",
            url: "/stomp"
          },
          {
            title: "The Lion King",
            category: "broadway",
            url: "/theLionKing"
          },
          {
            title: "Narcos",
            category: "tv-show",
            url: "/narcos"
          },
          {
            title: "Hamilton",
            category: "broadway",
            url: "/hamilton"
          }
        ]);
      }, 1000);
    });
  } else {
    return Promise.reject({
      data: null,
      error: "Invalid UserId"
    });
  }
};
