$(document).ready(function () {
  let info = [];

  const settings = {
    async: true,
    crossDomain: true,
    url: "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=coldplay&api_key=83de9dd58e7c87338f49d47644343a91&format=json",
    method: "GET",
  };
  console.log(info[0]);
  console.log(info);
  $.ajax(settings)
    .done((res) => {
      console.log(res);
      const albumList = res.topalbums.album.slice(0, 10);
      albumList.map((elem) => {
        info.push({
          title: elem.name,
          image: elem.image[2]["#text"],
        });
      });
      var $list = $('<div class="swiper-wrapper"></div>');
      info.map((elem) => {
        $list.append(
          `<div class="swiper-slide"><div class="imgbox"><img src="${elem.image}" alt="" class="discography-img"/></div><div class="title album-title">${elem.title}</div></div>`,
        );
      });
      $("#disco-container").append($list);
    })
    .fail((err) => {
      console.log(err);
    });
});
