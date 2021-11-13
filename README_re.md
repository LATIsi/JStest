# JStest

Created with CodeSandbox

# 벨로퍼트와 함께하는 리엑트 JS 공부

10월달에 react관련해서 공부를 했지만(노션정리) 중요한부분은 다시 되짚어가기위해 작성
index.js의 ReactDOM.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미

단순히 감싸기 위하여 불필요한 div 는 <></> 로 처리 가능

변수를 보여줄땐 {}

- props (속성 property)
  다른 컴포넌트에 값을 전달하는것 즉, 부모에게 받아온 데이터임
  읽기만 됨, 수정 불가능
  ex ) {this.props.JXS의 속성이름}
  그래서 받은뒤에 수정할 시, 이벤트를 사용하기도 한다.

---

- state
  사용자와 동적인 통신을 위함. 변수-객체같은느낌?
  부모에게 상속받는 class를 생성해 생성자로 사용함
  변경될시 HTML이 자동으로 재렌더링, 초기화 시키고싶으면 render앞에..

비구조화 할당
function Hello({ color, name }) {
return <div style={{ color }}>안녕하세요 {name}</div>
}
defaultProps 로 기본값 설정
Hello.defaultProps = {
name: '이름없음'
}

props.children
컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 때 넣는다.

배열 비구조화 할당식
const [number, setNumber] = useState(0);
useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 이 함수를 호출해주면 배열이 반환
1은 현재 상태, 2는 Setter 함수
setNumber(number를 어떻게 할것인지...);

리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있습니다. 컴포넌트 최적화에 대해서는 나중에 더 자세히 알아보도록 하겠습니다.

# 중요

리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.
https://react.vlpt.us/basic/09-multiple-inputs.html

#useRef
스트롤위치, 함수클리어...

#배열 렌더링
https://react.vlpt.us/basic/11-render-array.html
리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함. key 값은 각 원소들마다 가지고 있는 고유값으로..
(sql의 pk처럼!, 중복되는 값도 없어야함)
map() 함수를 사용 할 때, 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하시면 됩니다.
배열이 업데이트 될 떄 key 가 있어야지 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제함. (중요)

# styled-components

https://react.vlpt.us/styling/03-styled-components.html
트랜지션 효과를 적용 할 때에는 CSS Keyframe 을 사용하며, styled-components 에서 이를 사용 할 때에는 keyframes 라는 유틸을 사용합니다.

Dialog가 나타날 때 DarkBackground 쪽에는 서서히 나타나는 fadeIn 효과를 주고, DialogBlock 에는 아래에서부터 위로 올라오는 효과를 보여주는 slideUp 효과를 줘보겠습니다. 애니메이션의 이름은 여러분들이 마음대로 지정 할 수 있습니다.
