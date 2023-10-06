const headerEl = document.querySelector("#header");
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > div");

// 페이지에 "스크롤이벤트" 추가
window.addEventListener(
  "scroll",
  // _.throttle (함수, 시간)
  // 스크롤이 300ms마다 한번씩 실행되도록 설정한다.(과부화방지)
  _.throttle(function () {
    // console.log(window.scrollY);
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

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 },
    },
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});
