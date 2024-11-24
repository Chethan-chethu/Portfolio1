$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: true,
  });

  $(".post-img>img").on("click", function () {
    window.open($(this).attr("src"), "_blank");
  });

  $("p.gg-qer").on("click", function () {
    window.open(
      `https://www.google.com/search?q=${this.textContent}`,
      "_blank"
    );
  });

  $(".post-img>img").hover(
    function () {
      $(this).addClass("img-hover");
    },
    function () {
      $(this).removeClass("img-hover");
    }
  );
});
