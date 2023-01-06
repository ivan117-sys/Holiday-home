"strict";

// SLIDER
const slider = document.querySelector(".slider");

const slides = document.querySelectorAll(".slide");

const btnRight = document.querySelector(".btn--right");

const btnLeft = document.querySelector(".btn--left");

let curSlide = 0;
maxSlide = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX( ${100 * i}%)`));

//  Next slide
btnRight.addEventListener("click", function () {
  if (curSlide === slides.length - 1) {
    curSlide = 0;
  } else {
    curSlide++;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX( ${100 * (i - curSlide)}%)`)
    );
  }
});
console.log(btnRight);

// Previous slide

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;

    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
      slides.forEach(
        (s, i) => (s.style.transform = `translateX( ${100 * (i - curSlide)}%)`)
      );
    }
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;

      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
      );
    }
  }
});
//
// Scrolling

const btnLearnMore = document.querySelector(".btn--more");
console.log(btnLearnMore);

const sectionFažana = document.querySelector(".fazana-section");

btnLearnMore.addEventListener("click", function (e) {
  const scoords1 = sectionFažana.getBoundingClientRect();

  console.log(scoords1);

  window.scrollTo({
    left: scoords1.left + window.pageXOffset,
    top: scoords1.top + window.pageYOffset,
    behavior: "smooth",
  });
});
//  Page navigation

const nav = document.querySelector(".navigation");
console.log(nav);

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav-item")) {
    const link = e.target;
    const siblings = link.closest(".navigation").querySelectorAll(".nav-item");

    siblings.forEach(function (el) {
      if (el !== link) el.style.opacity = 0.5;
    });
  }
});

nav.addEventListener("mouseout", function (e) {
  const link = e.target;
  const siblings = link.closest(".navigation").querySelectorAll(".nav-item");

  siblings.forEach(function (el) {
    if (el !== link) el.style.opacity = 1;
  });
});

//  Modal window

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnOpenModal = document.querySelectorAll(".btn--show-modal");

const btnCloseModal = document.querySelector(".btn--close-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((e) => {
  console.log(e);
  e.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// Sticky navigation

const section = document.querySelector(".hero-section");

console.log(section);

const navigation = document.querySelector(".header");
const navHeight = navigation.getBoundingClientRect().height;
console.log(navigation);

const header = document.querySelector(".header");
console.log(header);

const stickyNav = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observer.observe(section);
// Revealing sections
const sections = document.querySelectorAll(".section");
console.log(sections);

const observeSections = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(observeSections, {
  root: null,
  threshold: 0.4,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});
// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//
