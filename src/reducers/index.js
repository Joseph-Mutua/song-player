const songsReducer = () => {
  return [
    { title: "As Long As You Love Me", duration: "3:58" },
    { title: "Human Nature", duration: "2:45" },
    { title: "It will Rain", duration: "4:07" },
    { title: "Love Song", duration: "3:42" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
