function drawerHandler() {
  if ($(".mobile-drawer").hasClass("active")) {
    $(".mobile-drawer").removeClass("active");
  } else {
    $(".mobile-drawer").addClass("active");
  }
}

document.addEventListener("scroll", () => {
  const element = document.querySelector(".navigation-wrapper");
  if (element) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  }
});
function linePopup() {
  const videoContainer = $(".popv-main-wrapper");
  if (videoContainer.hasClass("active")) {
    videoContainer.removeClass("active");
  } else {
    videoContainer.addClass("active");
  }
}
