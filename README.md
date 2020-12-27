# interactive-developer-clone
Interactive Developer 김종민님의 Creative Coding을 공부합니다. (https://www.youtube.com/c/cmiscm)

## [moving_wave] 
- *출처: https://www.youtube.com/watch?v=LLfhY4eVwDY&t=2s*

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

## [ball_collision]
- *출처: https://www.youtube.com/watch?v=sLCiI6d5vTM*

- __핵심 Idea__
  - Ball 객체 생성시 인스턴스 변수로 Ball의 x, y 좌표와 vx, vy 방향 벡터를 설정해준다. 
  - 만약 Ball 객체가 window 창에 맞닿으면, 충돌한 방향 벡터에 -1을 곱해줘 튕겨져 나오는 것을 구현한다. 
  - 같은 원리로 Block 객체에 맞닿으면, 충돌한 방향 벡터에 -1을 곱해줘 튕겨져 나오는 것을 구현한다. 
    - Block의 어느 부분에 맞았는지를 계산하는 게, Window 보다는 조금 복잡한 수식이 요구된다. 
    - 해당 프로젝트에서는 현재 Ball 객체의 위치와 Block의 4개의 변 간의 거리 중 최소값을 구한다. 
    - 해당 최솟값이 x에 가깝다면 x의 벡터에 -1을, y에 가깞다면 y의 벡터에 -1을 곱한다. 
