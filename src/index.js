let name = `사과`;
let price = 100;
let num = 5;

console.log(`${name}의 구매가는 ${price * num}원 입니다. ${5 + 10} 입니다`); // 15 입니다

function hello(name) {
  return console.log(`안녕하세요, ${name}!`);
}

hello('민지');

const apple = {
  name: '사과',
  color: '빨강',
  taste: '단맛',
  price: '500'
};

const kiwi = {
  name: '키위',
  color: 'green',
  taste: '새콤달콤한 맛',
  price: '300'
};

function set({ name, color, taste, price }) {
  const text = `이 과일의 이름은 ${name}이고, 색은 ${color}이며
  맛은 무려 ${taste}입니다! 더군다나 지금은 세일해서 원래가격인 ${price}에서 200원을 뺀
  ${price - 200}원에 구입하실수 있으십니다!`;
  return console.log(text);
}
set(kiwi);

const tweet = {
  name: '파랑새',
  color: 'blue',
  say: '짹짹!',
  sound: function () {
    console.log(this.say);
  }
};

tweet.sound();

const reduce = [1, 2, 3, 4, 5];
let sum = reduce.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
