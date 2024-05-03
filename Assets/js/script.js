function CopyLeftURL() {
  const leftLink = document.getElementById("left-link").textContent;
  navigator.clipboard.writeText(leftLink);
  alert("Link copied to clipboard!");
}

function CopyRightURL() {
  const rightLink = document.getElementById("right-link").textContent;
  navigator.clipboard.writeText(rightLink);
  alert("Link copied to clipboard!");
}

function loadContent(section) {
  const mainContent = document.getElementById("main-content");
  console.log(section);
  fetch(`/Dashboard/${section}.html`)
    .then((response) => response.text())
    .then((html) => {
      mainContent.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching content:", error);
    });
}

$(window).on("load", function () {
  const loader = $(".page-loader");
  const mainContent = $(".container-fluid");
  mainContent.hide();
  setTimeout(function () {
    loader.css("transition", "opacity 1s");
    loader.css("opacity", "0");
    setTimeout(function () {
      mainContent.show();
      loader.hide();
    }, 500);
  }, 2000);
});
