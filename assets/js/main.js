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

// 送出文章表單
function sendPost(element) {
  const form = element.closest("form");
  const formData = new FormData(form);
  const dataObj = {};

  // 使用迭代器列印出所有表單數據
  for (let [key, value] of formData.entries()) {
    if ("content" === key) {
      value = tinymce.get("content").getContent();
    }
    dataObj[key] = value;
    console.log(`${key}: ${value}`);
  }
  console.log("🚀 ~ dataObj:", dataObj);
}
