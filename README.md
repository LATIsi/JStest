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

# getter / setter

JAVA에서도 정보 은닉/캡슐화로 배웠던 개념인데,,, JS에서도 가능!
getter는 값 할당
setter는 값 반환으로 이해하고있었다..

https://learnjs.vlpt.us/basics/09-array-functions.html
배열내장함수까지 완료

# 21.11.09

기본은 완료, 슬슬 파고들기

프로토타입과 클래스
undefined 와 null 은 Falsy 한 값
// null, undefined, 0, '', NaN

https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d 참고,

# map

반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것(매핑)
어떻게 짝지어줄 것인가 정의한 함수를 메서드의 인자로..
기존 객체를 수정하지만 배열 안에 객체가 들어있는 경우, 객체는 공유

# reduce

배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

초깃값을 적어두지않으면 자동으로 0번째 인덱스의 값이 부여됨
reduceRight -> 요소순회 오른쪽 - 왼쪽

메서드 호출 체이닝 (연속호출)
메서드에 return this를 사용하기.
객체.메서드().메서드().메서드();

# 기본파라미터 값 부여

function( 변수 = 기본값){

}

# spread 연산자

가져와서 이어붙이는,,
배열이나 객체에도 사용가능, 여러번 사용가능

... (가져올 배열, 객체이름),
추가할내용

# rest

객체와 배열에서 사용 할 때는 이렇게 비구조화 할당 문법과 함께 사용됩니다. 주로 사용 할때는 위와 같이 rest 라는 키워드를 사용하게 되는데요, 추출한 값의 이름이 꼭 rest 일 필요는 없습니다.

# let { 뺄 내용/객체..., ...뺀 내용이 담긴 배열/객체의 이름 } = 원래배열/객체;

뺀 내용이 담긴 객체 이름에서 ...가 붙는게 중요

# resolve, reject

https://velog.io/@rejoelve/%EB%B4%90%EB%8F%84-%EB%B4%90%EB%8F%84-%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-resolve-reject

#Promise, then
http://daplus.net/javascript-javascript%EC%97%90%EC%84%9C-then-%ED%95%A8%EC%88%98%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%84-%EC%9D%98%EB%AF%B8%ED%95%A9%EB%8B%88%EA%B9%8C/

콜백지옥...
Promise 는 성공(resolve)/실패(reject)가 있다.
Promise 의 속성 중에는, 만약 then (인자로 넣어야하는것은 함수) 내부에 넣은 함수에서 또 Promise 를 리턴하게 된다면, 연달아서 사용 할 수 있다
참고인용: https://learnjs.vlpt.us/async/01-promise.html

콜백관련 더 살펴보자
https://ko.javascript.info/callbacks
참고해보기.

# async/await

ES8에 해당하는 문법
https://learnjs.vlpt.us/async/02-async-await.html

document.getElementById()
dom의 id 요소와 연결시켜주는것..
class는 document.querySelector()나 document.getElementsByClassName()를 사용해 가져오기

변수.innerText // 내용
변수.offsetTop // top 위치
변수.id //id

element.innerText;
이 속성은 element 안의 text 값들만을 가져옵니다.

# ex) <h1>A</h1> 같은..

element.innerHTML;
innerHTML은 element 안의 HTML이나 XML을 가져옵니다.
ex) A

https://developer.mozilla.org/ko/docs/Web/Events

on이벤트 참조 링크

#2021.11.10
