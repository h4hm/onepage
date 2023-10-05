const headerEl = document.querySelector("#header");

// 페이지에 "스크롤이벤트" 추가
window.addEventListener(
  "scroll",
  // _.throttle (함수, 시간)
  // 스크롤이 300ms마다 한번씩 실행되도록 설정한다.(과부화방지)
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      // 페이지 스크롤 Y축 위치가 200px보다 크면

      // gsap.to(요소, 시간, 옵션)
      gsap.to(headerEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 페이지 스크롤 Y축 위치가 200px보다 작으면

      gsap.to(headerEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
