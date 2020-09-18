window.addEventListener("load", () => {
  const midLine = document.querySelector(".mid-line");
  const logoSvg = document.querySelector(".logo-svg");
  const header = document.querySelector(".header");
  let midLineOffTop = midLine.offsetTop;
  let midLinedefaultTop = 50;
  let headerHeight = header.offsetHeight;
  let midLineAnimation = false;

  window.addEventListener("scroll", () => {
    let winY = window.pageYOffset;

    console.log(winY);
    if (winY >= midLineOffTop - headerHeight && midLineAnimation) {
      console.log("같다");
      midLine.style.position = "fixed";
      midLine.style.top = `${headerHeight}px`;
      /* eslint-disable */
      logoSvg.setAttribute("src", "img/Logo.svg");
      /* eslint-enable */
      midLineAnimation = false;
    }

    if (winY < midLineOffTop - headerHeight && !midLineAnimation) {
      console.log("작다");
      midLine.style.position = "absolute";
      midLine.style.top = `${midLinedefaultTop}%`;
      /* eslint-disable */
      logoSvg.setAttribute("src", "img/Logo-change.svg");
      /* eslint-enable */
      midLineAnimation = true;
    }
  });

  window.addEventListener("scroll", scrollIndicator);

  $(".slide").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 200, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: false, //드래그 가능 여부

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
    ],
  });
});

function scrollIndicator(e) {
  const scrollIndicatorLine = document.querySelector(".scroll-indicator");
  const scrollIndicatorEffect = document.querySelector(
    ".scroll-indicator_effect"
  );
  const maxHeight = window.document.body.scrollHeight - window.innerHeight;
  const percentage = (window.pageYOffset / maxHeight) * 100;

  scrollIndicatorLine.style.width = `${percentage}%`;
  scrollIndicatorEffect.style.left = `${percentage}%`;
  if (scrollIndicatorEffect.style.left <= "0.5%") {
    scrollIndicatorEffect.style.left = "-15px";
  }
}
