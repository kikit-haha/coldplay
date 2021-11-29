$(document).ready(function () {
  function pageLink(aLink) {
    //ajax통신의 load()메서드 활용
    //사용자가 클릭하면 해당하는 페이지를 서버에 요청하고 페이지 받아서 사용자에게 보여준다.
    $("#board").load(aLink);
  }

  function barAniClose() {
    $(".toggle>.bar").removeClass("hover");
    $(".toggle")
      .children(".bar:last-child")
      .css({
        width: "0px",
        top: "64px",
      })
      .animate({
        width: "20px",
      });
    $(".toggle").children(".bar:eq(0)").removeClass("closeToggle_L");
    $(".toggle").children(".bar:eq(1)").removeClass("closeToggle_R");
    //전체메뉴 올라가게 하기
    $(".toggleMenu").animate({
      top: "-100%",
    });
  }
  //내비게이션 클릭시 해당하는 문서 연계하여 불러오기
  $(".gnb_main li:eq(0)>a").click(function () {
    pageLink("./sub/profile.html");
  });
  $(".gnb_main li:eq(1)>a").click(function () {
    pageLink("./sub/news.html");
  });
  $(".gnb_main li:eq(2)>a").click(function () {
    pageLink("./sub/gallery.html");
  });
  $(".gnb_main li:eq(3)>a").click(function () {
    pageLink("./sub/discography.html");
  });
  $(".gnb_main li:eq(4)>a").click(function () {
    pageLink("./sub/schedule.html");
  });

  //메인메뉴에 각 메뉴 클릭시 해당페이지나오게하기
  $(".toggleMenu>nav li:eq(0)>a").click(function () {
    barAniClose();
    pageLink("./sub/profile.html");
  });
  $(".toggleMenu>nav li:eq(1)>a").click(function () {
    barAniClose();
    pageLink("./sub/news.html");
  });
  $(".toggleMenu>nav li:eq(2)>a").click(function () {
    barAniClose();
    pageLink("./sub/gallery.html");
  });
  $(".toggleMenu>nav li:eq(3)>a").click(function () {
    barAniClose();
    pageLink("./sub/discography.html");
  });
  $(".toggleMenu>nav li:eq(4)>a").click(function () {
    barAniClose();
    pageLink("./sub/schedule.html");
  });
});
