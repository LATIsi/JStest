# JStest

Created with CodeSandbox

# 벨로퍼트와 함께하는 모던 JS 공부

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

#Promise
콜백지옥... (인용)
Promise 는 성공(resolve)/실패(reject)가 있다.
Promise 의 속성 중에는, 만약 then (인자로 넣어야하는것은 함수) 내부에 넣은 함수에서 또 Promise 를 리턴하게 된다면, 연달아서 사용 할 수 있다. 즉 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 됩니다.
참고인용: https://learnjs.vlpt.us/async/01-promise.html

# resolve, reject

https://velog.io/@rejoelve/%EB%B4%90%EB%8F%84-%EB%B4%90%EB%8F%84-%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-resolve-reject
의 링크 참조, 인용
비동기 작업은 성공 혹은 실패하며, 작업 요청, 처리해주는쪽이 구분되어있다.
콜백 방식이 성공/실패를 구분하는 방법은 콜백함수의 인자 위치(순서)이고
프로미스 방식은 성공/실패가 resolve/reject 호출로 구분된다는 것만 확인하면 된다.

# then

콜백관련 더 살펴보자
https://ko.javascript.info/callbacks
참고해보기.

# async/await

ES8에 해당하는 문법
https://learnjs.vlpt.us/async/02-async-await.html
(인용)
async/await 문법을 사용할 때에는, 함수를 선언 시 함수의 앞부분에 async 키워드를 붙인다
그리고 함수에서 호출하는 Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행
async 함수에서 에러를 발생 시킬때에는 throw, 에러를 잡아낼 때에는 try/catch

document.getElementById()
dom의 id 요소와 연결시켜주는것..
class는 document.querySelector()나 document.getElementsByClassName()를 사용해 가져오기

변수.innerText // 내용
변수.offsetTop // top 위치
변수.id //id

element.innerText;
이 속성은 element 안의 text 값들만을 가져옵니다.
ex)</h1>A</h1> 같은..
커질까봐 /를 넣었습니다.

element.innerHTML;
innerHTML은 element 안의 HTML이나 XML을 가져옵니다.
ex) A

https://developer.mozilla.org/ko/docs/Web/Events

on이벤트 참조 링크
