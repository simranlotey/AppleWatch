function changeSection(element) {
  var rightContainer = document.querySelector('.container-section .right');
  var circles = document.querySelectorAll('.circle');
  var activeListItem = document.querySelector('.active a');
  var img = document.querySelector('.imgBx-section img');
  var pageNumber = document.querySelector('.right-bottom-section-indicator span');
  var rightImages = document.querySelectorAll('.right-bottom-section-watch img');
  var rightImage1 = rightImages[0];
  var rightImage2 = rightImages[1];
  var rightImage3 = rightImages[2];

  circles.forEach(circle => {
    circle.classList.remove('active');
  });
  element.classList.add('active');

  var color = window.getComputedStyle(element).getPropertyValue('background-color');

  rightContainer.style.background = color;
  activeListItem.style.color = color;

  var imageInfo = [
    {
      basePath: 'images/Watch 1.png',
      set: ['images/Watch 1 4.png', 'images/Watch 1 2.png', 'images/Watch 1 3.png']
    },
    {
      basePath: 'images/Watch 2.png',
      set: ['images/Watch 1 1.png', 'images/Watch 1 2.png', 'images/Watch 1 3.png']
    },
    {
      basePath: 'images/Watch 3.png',
      set: ['images/Watch 1 1.png', 'images/Watch 1 4.png', 'images/Watch 1 3.png']
    },
    {
      basePath: 'images/Watch 4.png',
      set: ['images/Watch 1 1.png', 'images/Watch 1 4.png', 'images/Watch 1 2.png']
    }
  ];

  var index = Array.from(circles).indexOf(element);
  var infoImg = imageInfo[index];

  img.src = infoImg.basePath;
  rightImage1.src = infoImg.set[0];
  rightImage2.src = infoImg.set[1];
  rightImage3.src = infoImg.set[2];
  pageNumber.textContent = index + 1;
}

var prevButton = document.querySelector('.right-bottom-section-indicator svg:first-of-type');
var nextButton = document.querySelector('.right-bottom-section-indicator svg:last-of-type');
var pageNumber = document.querySelector('.right-bottom-section-indicator span');

prevButton.addEventListener('click', function () {
  var currentPage = parseInt(pageNumber.textContent);
  var circles = document.querySelectorAll('.circle');
  console.log(currentPage)

  if (currentPage > 1) {
    changeSection(circles[currentPage - 2]);
  }
});

nextButton.addEventListener('click', function () {
  var currentPage = parseInt(pageNumber.textContent);
  var circles = document.querySelectorAll('.circle');

  if (currentPage < circles.length) {
    changeSection(circles[currentPage]);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var searchIcon = document.querySelector('.search-icons');
  var searchInput = document.querySelector('.search-input');

  searchIcon.addEventListener('click', function () {
    searchInput.classList.toggle('open');
  });
});