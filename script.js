function changeBackgroundColor(element) {
  var rightContainer = document.querySelector('.container-section .right');
  var circles = document.querySelectorAll('.circle');
  var activeListItem = document.querySelector('.active a');
  var img = document.querySelector('.imgBx-section img');

  circles.forEach(circle => {
    circle.classList.remove('active');
  });
  element.classList.add('active');

  var color = window.getComputedStyle(element).getPropertyValue('background-color');

  rightContainer.style.background = color;
  activeListItem.style.color = color;

  var imagePaths = [
    'images/Watch 1.png',
    'images/Watch 2.png',
    'images/Watch 3.png',
    'images/Watch 4.png'
  ];

  var index = Array.from(circles).indexOf(element);
  img.src = imagePaths[index];
}

function toggleSearchBar() {
  var searchBarContainer = document.getElementById("searchBarContainer");
  var searchIconElement = document.querySelector(".search-icon");
  searchBarContainer.style.display =
    searchBarContainer.style.display === "none" ? "block" : "none";
  searchIconElement.style.display =
    searchIconElement.style.display === "none" ? "block" : "none";
}
