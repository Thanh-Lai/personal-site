
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

navbar.onmouseover = function() {
    document.getElementById("navbar").style.top = "0";
}

let slideIndex, slides, dots, dotsContainer, captionText;

function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("image-holder");
  slides[slideIndex].style.opacity = 1;
  captionText = document.querySelector(".caption-holder .caption-text");
  captionText.innerText = slides[slideIndex].querySelector(".caption-text").innerText;
  dots = [];
  dotsContainer = document.getElementById("dots-container");

  for (let i = 0; i < slides.length; i++) {
    let dot =  document.createElement("span");
    dot.classList.add("dots");
    dot.setAttribute("onClick", "moveSlide("+i+")")
    dotsContainer.append(dot);
    dots.push(dot)
  }
  dots[slideIndex].classList.add("active")
}

initGallery();

function plusSLides(n) {
  moveSlide(slideIndex + n)
}

function moveSlide(n) {
  let moveSLideClass = {
    forCurrent: "",
    forNext: ""
  }
  let slideTextClass;

  if (n > slideIndex) {
    if (n >= slides.length) n = 0
    moveSLideClass.forCurrent = "move-left-current-slide";
    moveSLideClass.forNext = "move-left-next-slide";
    slideTextClass = "slide-text-from-top";
  } else if (n < slideIndex) {
    if (n < 0) n = slides.length - 1
    moveSLideClass.forCurrent = "move-right-current-slide";
    moveSLideClass.forNext = "move-right-next-slide";
    slideTextClass = "slide-text-from-bottom";
  }
  if (n !== slideIndex) {
    let next = slides[n];
    let current = slides[slideIndex];
    for (let i = 0; i < slides.length; i++) {
      slides[i].className = "image-holder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSLideClass.forCurrent);
    next.classList.add(moveSLideClass.forNext);
    dots[n].classList.add("active");
    slideIndex = n;
  }
  captionText.style.display = "none";
  captionText.className = `caption-text ${slideTextClass}`;
  captionText.innerText = slides[n].querySelector(".caption-text").innerText;
  captionText.style.display = "block";
}

let timer =  null;

function setTimer() {
  timer = setInterval(() => plusSLides(1), 3500)
}

setTimer();

function playPauseSLides() {
  let playPauseBtn = document.getElementById("play-pause-btn");
  if (timer === null) {
    setTimer();

    playPauseBtn.style.backgroundPositionY = "-33px";
  } else {
    clearInterval(timer);
    timer = null;
    playPauseBtn.style.backgroundPositionY = "-0px";
  }
}
