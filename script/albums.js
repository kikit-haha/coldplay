fetch("https://theaudiodb.p.rapidapi.com/album.php?i=111239", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
    "x-rapidapi-key": "8e5c5dd52bmsh23e34ee18ef0108p1a5fcbjsn864615166e2d",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
