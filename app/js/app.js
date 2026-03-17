// Импортируем константы
import { device_width, gsap_ease } from "@utils/constants.js";

// Импортируем анимацию wrapper
import "@utils/wrapperFade.js";

// Импортируем функцию анимации текста
import { animateText } from "@utils/splitAnimationText.js";

// Импортируем курсор
// import { initCursor } from "@utils/cursor.js";

// Импортируем модуль переключения тем
import {
  toggleThemeByTime,
  initThemeInterval,
  initThemeToggleButton,
} from "@utils/themeToggle.js";

// Инициализируем приложение при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем переключение темы
  toggleThemeByTime();
  initThemeInterval();
  initThemeToggleButton();

  // Инициализируем курсор
  // initCursor();

  // Инициализируем страницы
  initHomePage();
  initAboutPage();
});

/**
 * Инициализация домашней страницы
 */
function initHomePage() {
  const home = document.querySelector(".home");
  if (!home) return;

  // Анимируем заголовок
  animateText(".home__name");

  // Анимируем дату с задержкой
  setTimeout(() => animateText(".home__2112"), 150);

  gsap.set(".home__link", {
    y: "1rem",
    opacity: 0,
  });

  gsap.set(".home__link-rem", {
    y: "1rem",
    opacity: 0,
  });

  // Анимируем ссылку
  gsap.to(".home__link", {
    y: "0",
    opacity: 1,
    duration: 0.2,
    ease: gsap_ease,
    delay: 0.4,
  });

  gsap.to(".home__link-rem", {
    y: "0",
    opacity: 1,
    duration: 0.1,
    ease: gsap_ease,
    delay: 0.6,
  });
}

/**
 * Инициализация страницы about
 */
function initAboutPage() {
  const about = document.querySelector(".about");
  if (!about) return;

  // Прогресс-бар скролла
  initScrollProgressBar();
}

/**
 * Инициализация прогресс-бара скролла
 */
function initScrollProgressBar() {
  const scrollProgress = document.getElementById("scrollProgress");
  if (!scrollProgress) return;

  // Запускаем анимацию прогресс-бара
  requestAnimationFrame(function updateProgressBar() {
    // Рассчитываем процент прокрутки страницы
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Обновляем ширину прогресс-бара
    scrollProgress.style.width = scrollPercentage + "%";

    // Продолжаем анимацию
    requestAnimationFrame(updateProgressBar);
  });
}

//Дальше наш код, можно импортами
//popup
$(document).ready(function () {
  // Открытие
  $(".open-popup-btn").click(function () {
    $("#popup-overlay").addClass("active");
    $("body").addClass("popup-open");
  });

  // Закрытие
  $(".popup__close, #popup-overlay").click(function (e) {
    if (
      $(e.target).hasClass("popup__overlay") ||
      $(e.target).hasClass("popup__close")
    ) {
      $("#popup-overlay").removeClass("active");
      $("body").removeClass("popup-open");
    }
  });

  // Escape
  $(document).keydown(function (e) {
    if (e.key === "Escape" && $("#popup-overlay").hasClass("active")) {
      $("#popup-overlay").removeClass("active");
      $("body").removeClass("popup-open");
    }
  });
});

// Карусель case
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

// const swiper = new Swiper(".case-swiper", {
//   modules: [Navigation],
//   loop: true,
//   loopedSlides: 5,  //кол-во слайдов
//   slidesPerView: 3, //видимые слайды
//   spaceBetween: 40, //отступы между слайдами
//   initialSlide: 1, 
//   navigation: {
//     prevEl: ".swiper-button-prev",
//     nextEl: ".swiper-button-next",
//   },
// });

// __________


const swiper = new Swiper(".case-swiper", {
  modules: [Navigation],
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  spaceBetween: 40,
  initialSlide: 1,
  slidesOffsetBefore: 50,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});


