# JStest

Created with CodeSandbox

# 리엑트 JS 공부

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

#children 관련
'어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있습니다.
범용적인 ‘박스’ 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
이러한 컴포넌트에서는 특수한 'children prop' 을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.'

# 비구조화 할당

function Hello({ color, name }) {
return <div style={{ color }}>안녕하세요 {name}</div>
}
defaultProps 로 기본값 설정
Hello.defaultProps = {
name: '이름없음'
}

props.children
컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 때 넣는다.

# 배열 비구조화 할당식

const [number, setNumber] = useState(0);
useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 이 함수를 호출해주면 배열이 반환
1은 현재 상태, 2는 Setter 함수
setNumber(number를 어떻게 할것인지...);

리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있습니다. 컴포넌트 최적화에 대해서는 나중에 더 자세히 알아보도록 하겠습니다.

# styled-components

https://react.vlpt.us/styling/03-styled-components.html
트랜지션 효과를 적용 할 때에는 CSS Keyframe 을 사용하며, styled-components 에서 이를 사용 할 때에는 keyframes 라는 유틸을 사용, 애니메이션 적용

글로벌 스타일일시,
createGlobalStyle로..
https://chaeyoung2.tistory.com/47
참고도 해보자.

# 중요

리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.
https://react.vlpt.us/basic/09-multiple-inputs.html

#useRef
스트롤위치, 함수클리어...

#배열 렌더링
https://react.vlpt.us/basic/11-render-array.html
리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야함. key 값은 각 원소들마다 가지고 있는 고유값으로..
(sql의 pk처럼!, 중복되는 값도 없어야함)
map() 함수를 사용 할 때, 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용.
배열이 업데이트 될 떄 key 가 있어야지 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제함. (중요)

# useReducer

https://www.daleseo.com/react-hooks-use-reducer/
상태관리 hook.
reducer 는 현재 상태와 행동 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
function reducer(state, action) { // 새로운 상태를 만드는 로직 , // const nextState = ...
return nextState; }

reducer 에서 반환하는 상태는 업데이트된 새로운 컴포넌트
action - 업데이트를 위한 정보, 관행적으로 어떤 부류의 행동인지를 나타내는 type 속성 & 해당 행동과 괸련된 데이터를 가짐

# const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)

상태 객체- 컴포넌트에서 사용 할 수 있는 상태
dispatch - 컴포넌트 내에서 상태 변경을 발생시키는 함수. 인자로는 reducer 함수에 넘길 행동(action) 객체 : dispatch({ type: 'INCREMENT' }).

즉, 컴포넌트에서 dispatch 함수에 행동(action)을 던지면, reducer 함수가 이 행동(action)에 따라서 상태(state)를 변경해줌.

# Context API

전역관리를 위함
상태관리는 일반적으로 useState 와 useReducer
특정 컴포넌트에서 어느정도 복잡한 상태 관리가 필요한경우 useReducer 와 content를 사용한다.
Context를 쓸때는, 하위 컴포넌트에 값을 주기위해 그저 계속 내려받는것을 방지할때만 사용한다. (프롭스 드릴링)

https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b8
redux와 react, context에 대한 글! 정말 중요함.

Context를 만들 때 React.createContext()
사용할 때는 useContext()

const UserDispatch = React.createContext(null);
Context 의 기본값을 설정. 여기서 설정하는 값은 Context 를 쓸 때 값을 따로 지정하지 않을 경우 사용되는 기본 값.

Context 만들면 안에 Provider 라는 컴포넌트를 통해 Context 의 값을 지정가능. 사용할 때, value 의 값을 지정해주면 ok.

<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
= Context 안에 Provider 컴포넌트로 Context 의 값을 정함(& value값 설정)
Provider 에 의하여 감싸진 컴포넌트 중 어디서든지 Context 의 값을 바로 조회
