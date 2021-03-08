// 1

const root = document.querySelector('#root');

root.addEventListener('click', ({ target }) => {
  console.log(target.id);
});

// 2

const arrs = [{ name: "width", value: 10 }, { name: "height", value: 20 }];

const createObj = (arr) => {
  const currentArr = [...arr];
  const newArr = [];

  currentArr.forEach((item) => {
    const arr = [];

    Object.keys(item).forEach((key) => {
      arr.push(item[key]);
    });

    newArr.push(arr);
  });

  return Object.fromEntries(newArr);
};

console.log(createObj(arrs));

// 3

// console.log(typeof (function() {})()); // - undefined
// Анонимная самовызывающаяся функция, которая ничего не возвращает

// 4

window.name = 'Hello';
function foo() {
  return this.name;
};
console.log(foo());

// 5

for (let i = 0; i <= 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

// 6

const bubbleSort = (arr) => {
  const currentArr = [...arr];

  for (let i = 1; i < currentArr.length; i += 1) {
    let swapped = false;

    if (currentArr[i - 1] > currentArr[i]) {
      const prev = currentArr[i];
      const next = currentArr[i - 1];
  
      currentArr[i - 1] = prev;
      currentArr[i] = next;
      swapped = true;
    }
    
    if (swapped) {
      return bubbleSort(currentArr);
    }
  }
  
  return currentArr;
};

const nums = [5, 2, 7, 0, 3, 1];
const sortedArr = bubbleSort(nums);
console.log(sortedArr);
