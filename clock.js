const clockSection = document.querySelector(".clock");
const time1 = clockSection.querySelector(".clock__time");
const dateSpan = clockSection.querySelector(".clock__today");

function Time() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  time1.innerHTML = `${hour}: ${minutes}: ${seconds}`;
}

function refresh() {
  setInterval(Time, 1000);
}

refresh();

/* 
    const clock = () => {};
    1. 이 함수는 시게를 만드는 기능입니다.
    2. Keyword - date mdn, 자바스크립트 초마다 함수 실행, 자바스크립트 텍스트 값 변경
    3. 출력 - 2021년 10월 20일 수요일 - dateSpan
                   04:05:06 - time
*/
