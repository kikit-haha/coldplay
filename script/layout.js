$(document).ready(function () {
  var sIcon = $(".snsBtn > ul > li > a");

  sIcon.hover(function () {
    //투명도를 1로
    $(this).toggleClass("hover");
    //위치값을 적용하여 내려오게함
    $(this).find(".bg").toggleClass("hover");
    //색상변경
    $(this).find("i").toggleClass("hover");
  });

  $(".toggle").hover(
    function () {
      $(this).find(".bar").addClass("hover");
    },
    function () {
      $(this).find(".bar").removeClass("hover");
    },
  );

  //햄버거메뉴를 클릭하면 X자모양 나오게 하고
  //마지막 바를 애니메이션한다.
  // console.log($(".toggle").children(".bar:lt(2)"));

  function barAniOpen() {
    //세번째 바가 길어지면서 아래로 내려간다.
    $(".toggle>.bar").removeClass("hover");
    $(".toggle")
      .children(".bar:last-child")
      .animate(
        {
          width: $(window).width() - 80,
        },
        300,
      );

    $(".toggle>.bar:last-child").animate(
      {
        top: "100vh",
      },
      300,
    );
    //첫번째두번째 바 엑스자로 만들기

    $(".toggle").children(".bar:eq(0)").addClass("closeToggle_L");
    $(".toggle").children(".bar:eq(1)").addClass("closeToggle_R");

    //전체메뉴 나타나게 하기
    $(".toggleMenu").delay(1500).animate({
      top: "0px",
    });
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

  $(".toggle").click(function () {
    //햄버거메뉴 클릭하면 함수 호출하기
    // console.log($(this));
    // console.log($(this).children(".bar"));
    // console.log($(this).children(".bar:first-child"));
    if ($(this).children(".bar:eq(0)").hasClass("closeToggle_L")) {
      console.log("yes");
      barAniClose();
    } else {
      barAniOpen();
    }
  });

  $(".toggleMenu>nav li").hover(function () {
    $(this).children("a").toggleClass("hover");
    $(this).children(".bar").toggleClass("hover");
  });
});
