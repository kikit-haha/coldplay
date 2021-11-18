$(document).ready(function () {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://theaudiodb.p.rapidapi.com/album.php?i=111239",
    method: "GET",
    headers: {
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      "x-rapidapi-key": "8e5c5dd52bmsh23e34ee18ef0108p1a5fcbjsn864615166e2d",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
