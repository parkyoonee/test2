// resize change height - 화면 리사이즈시 높이 변수값 변경
let screenHeight = window.innerHeight;
let halfHeight = screenHeight / 2;
window.addEventListener("resize", () => {
  screenHeight = window.innerHeight;
  halfHeight = screenHeight / 2;
});

// Scroll Down Event - 스크롤 다운 이벤트
const sections = document.querySelectorAll(".menu_section");
const sectionArrReverse = Array.from(sections).reverse();
const header = document.querySelector(".scroll_wrap");
const scrollUpBtn = document.querySelector(".scroll-up-btn");
const scrollDownIcon = document.querySelector(".scroll-down");

document.addEventListener("scroll", () => {
  // current section indicate - 현재 섹션위치 표시
  pageIndicate();
});

function pageIndicate() {
  let height = (window.scrollY || window.pageYOffset || document.documentElement.scrollTop) + halfHeight;
  for (let i = 0; i < sectionArrReverse.length; i++) {
    let offsetTop = sectionArrReverse[i].offsetTop;
    if (height > offsetTop) {
      let currentNav = document.querySelector(".on");
      let postNav = document.querySelector(
        `.scroll_item[data-link="#${sectionArrReverse[i].id}"]`
      );
      currentNav.classList.remove("on");
      postNav.classList.add("on");
      break;
    }
  }
}

// Scroll To Event (click) - 링크 클릭시 해당 위치로 스크롤이동 이벤트
const headerNav = document.querySelector(".scroll_move");

headerNav.addEventListener("click", event => {
  const target = event.target;
  const link = target.dataset.link;
  if (!link) return;
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollInto = document.querySelector(selector);
  scrollInto.scrollIntoView({ behavior: "smooth" });
}


 /*1. 작은이미지 .small 접근하기
      2. 작은이미지를 클릭하면 큰 이미지가 바뀌어야함, bigimg뜨고
      3. bigimg 아무데나 클릭하면 다시 가려지기*/

      var pics = document.getElementsByClassName('small')
      var big = document.getElementById('big')
      var bigimg = document.getElementById('bigimg')
      //pics는 6개의 이미지가 들어간 배열임

      for(let i=0; i<pics.length; i++){
      pics[i].addEventListener('click', show)}

      function show(){
     //작은 이미지의 data-src속성을 가져와서 큰 이미지로 바꾸기
         var bb = this.getAttribute('data-src')
        big.setAttribute('src', bb)
        bigimg.style.display = 'block'
      }

      bigimg.onclick = function(){
        bigimg.style.display = 'none'
      }



      //project
      var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".mySwiper2", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // var swiper = new Swiper(".mySwiper_wrap", {
    //   direction: "vertical",
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   mousewheel: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });