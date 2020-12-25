# interactive-developer-clone
Interactive Developer 김종민님의 Creative Coding을 공부합니다. (https://www.youtube.com/c/cmiscm)

### moving_wave 
- *출처: https://www.youtube.com/watch?v=LLfhY4eVwDY&list=PLGf_tBShGSDNGHhFBT4pKFRMpiBrZJXCm*

- __JS 모듈 (참고: https://ko.javascript.info/modules-intro)__
  - 대개 클래스 하나 or 특정한 목적을 가진 복수의 함수들로 구성
  - export: 외부 모듈에서 해당 변수나 함수에 접근할 수 있다. 
  - import: 외부 모듈의 기능을 가져올 수 있다. 
  - 모듈은 특수한 키워드나 기능이 사용되어, <script type="module"> 속성 설정 필수

- __requestAnimationFrame() (참고: https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)__
  - 브라우저에게 수행하기를 원하는 애니메이션을 알리고, 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출
  - 리페인트 이전에 실행할 콜백을 인자로 받는다. 
  
- __bind() (참고: https://kamang-it.tistory.com/entry/JavaScript07this-this%EB%B0%94%EC%9D%B8%EB%93%9C%ED%8E%B8bindcallapply)__
  - this는 내가 정한 object로 고정!
