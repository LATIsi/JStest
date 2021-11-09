# JStest

Created with CodeSandbox

# 벨로퍼트와 함께하는 모던 JS 공부

https://learnjs.vlpt.us/
21.11.08부터 시작하여
현재 1장 반복문까지 완료.
1~4는 쉬우니 패스

차근차근 배운내용들 정리하기
객체안에 함수를 넣어도 가능. 그 함수의 this는 포함된 객체를 가르킴
화살표 함수는 this가 자신이 속한 개체를 가르키지 않고 상위 스코프의 this를 가르키기에 객체안에서 함수 선언시 일반 함수로 선언해야함.
또한, this 변경 불가능. (call, apply, bind 사용X)

또한 화살표 함수는 생성자 함수 사용 (new 함수.. 재활용) 불가능.

getter / setter
JAVA에서도 정보 은닉/캡슐화로 배웠던 개념인데,,, JS에서도 가능!
getter는 값 할당
setter는 값 반환으로 이해하고있었다..

https://learnjs.vlpt.us/basics/09-array-functions.html
배열내장함수까지 완료

21.11.09
프로토타입과 클래스
undefined 와 null 은 Falsy 한 값
// null, undefined, 0, '', NaN
