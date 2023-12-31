// Завдання 1: Дано масив, використовуючи цикл "for in" виведіть на консоль всі індекси цього масиву
function printIndexes(array) {
  for (const index in array){
    console.log(index);
  }
}

console.log("Завдання 1 ====================================");
printIndexes([1, 2, 3, 4, 5]);
// Виведе
// 0
// 1
// 2
// 3
// 4

// Завдання 2: Дано масив, використовуючи цикл "for in" знайдіть суму всіх елементів масиву
function sumArray(array) {
  // Ініціалізуємо змінну для зберігання суми
  let sum = 0;
  // Проходимося по всіх індексах масиву
for(let i = 0; i < array.length; i++){
  // Додаємо кожен елемент до загальної суми
    sum += array[i];
    }
      // Повертаємо суму
return sum;
}

console.log("Завдання 2 ====================================");
console.log("sumArray([1, 2, 3, 4, 5])", sumArray([1, 2, 3, 4, 5])); // Виведе 15

// Завдання 3: Дано масив, використовуючи цикл "for of" знайдіть добуток всіх елементів масиву
function multiplyArray(array) {
  // Ініціалізуємо змінну для зберігання добутку
  let sum = 1;
     for (let elem of array ){
     sum*=elem;
 }
  return sum;
}

console.log("Завдання 3 ====================================");
console.log("multiplyArray([1, 2, 3, 4, 5])", multiplyArray([1, 2, 3, 4, 5])); // Виведе 120

// Завдання 4: Дано масив рядків. Видаліть третій елемент масиву та перетворіть в рядок за допомогою методу toString(). Результат виведіть на консоль.
function modifyArray(array) {
  // Видаляємо третій елемент масиву
  delete array[2];
  return console.log (array.toString());
  // Виводимо масив перетворений в рядок
}

console.log("Завдання 4 ====================================");
modifyArray([1, "two", 3, "four", 5]); // Виведе 1,two,,four,5

// Завдання 5: Дано масив рядків. За допомогою циклу for переберіть масив, виведіть кожен елемент на консоль у верхньому регістрі.
function printUppercase(array) {
  let up = array;
      for (let i = 0; i < array.length; i++){
      up [i]=array[i].toUpperCase();
  }
    return console.log(up);
  }

console.log("Завдання 5 ====================================");
printUppercase(["one", "two", "three"]); // Виведе ONE TWO THREE

// Завдання 6: Функція приймає деструктуризований масив чисел де буду перший елемент та масив всіх інших.
// За допомогою циклу for переберіть масив, знайдіть мінімальне та максимальне значення. Результат виведіть на консоль.
function findMinMax([firstElement, ...restElements]) { 
  let  min = firstElement;
  let  max = firstElement;
    for (let i = 1; i < restElements.length; i++) {
        if (restElements[i] > max) {max = restElements[i];}
        if (restElements[i] < min) {min = restElements[i];}
    }return console.log(`Min:${min},Max:${max}`);
  }

console.log("Завдання 6 ====================================");
findMinMax([5, 2, 8, 1, 9, 3]); // Виведе Min: 1 Max: 9

// Завдання 7: Функція приймає масив рядків.
// Перетворіть масив в рядок за допомогою методу toString() та повторіть його 2 рази. Результат виведіть на консоль.
function printStrings(array) {
  console.log(array.toString().repeat(2))
}

console.log("Завдання 7 ====================================");
printStrings([1, "two", 3, "four", 5]); // 1,two,3,four,51,two,3,four,5

// Завдання 8: Функція приймає масив рядків.
// За допомогою методу toString() перетворіть масив в рядок, та виясніть чи є в цьому рядку підрядок subString .

function concatenateStrings(array, subString) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === subString) {
        return console.log('true');
    }
}
  return console.log('false');
}

console.log("Завдання 8 ====================================");
concatenateStrings([1, "two", 3, "four", 5], "two"); // Виведе true

// Завдання 9: Функція приймає масив чисел.
// За допомогою циклу for-in переберіть масив, додайте до кожного елемента 10.
// Зберігайте результат в новому масиві. Результат виведіть на консоль.
function addTenToEach(array) {
  for (let i in array){    
    arr= array[i]+10;
    console.log(arr);
  }  
}

console.log("Завдання 9 ====================================");
addTenToEach([5, 10, 15, 20]); // Виведе [15, 20, 25, 30]

// Завдання 10: Створити функцію, яка приймає масив чисел як аргумент.
function swapMinMax(array) {
  let min = array[0];
  let max = array[0];
  let maxIndex = 0;
  let minIndex = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
       max = array[i];
      maxIndex = i;
    }else if (array[i] < min) {
       min = array[i];
       minIndex = i;
    }      
  } 
  [array[maxIndex], array[minIndex]]=[array[minIndex], array[maxIndex]];
  return array;
}

console.log("Завдання 10 ====================================");
// Виводимо в консоль результат виклику функції swapMinMax з масивом [1, 2, 3, 4, 5] як аргументом. Очікуємо бачити [5, 2, 3, 4, 1], оскільки максимальне та мінімальне значення обміняні місцями.
console.log(swapMinMax([1, 2, 3, 4, 5]));

// Завдання 11: Функція приймає масив чисел. Поверніть новий масив, який містить тільки парні числа з оригінального масиву.
function getEvenNumbers(arr) {
  let res = arr.filter( item => (item & 1) === 0 );
  return res;
}
console.log("Завдання 11 ====================================");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе [2, 4, 6]

// Завдання 12: Функція приймає масив чисел. Поверніть новий масив, в якому всі числа помножені на їх індекс.
function multiplyByIndex(arr) {
  let oneMore = [];
  for (let i = 0; i < arr.length; i++) {
    oneMore = [...oneMore, arr[i] * i];
  }
  return oneMore;
}
console.log("Завдання 12 ====================================");
console.log(multiplyByIndex([1, 2, 3, 4, 5])); // Виведе [0, 2, 6, 12, 20]

// Завдання 13: Функція приймає масив чисел. Повертає новий масив, в якому всі числа більші за 10 замінені на рядок "Greater than 10", а решта чисел замінені на рядок "Less than or equal to 10".
function replaceNumbers(arr) {
  let newAr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newAr = [...newAr, "Greater than 10"];
    } else if (arr[i] <= 10) {
      newAr = [...newAr, "Less than or equal to 10"];
    }
  }
  return newAr;
}
console.log("Завдання 13 ====================================");
console.log(replaceNumbers([5, 10, 15, 20])); // Виведе ["Less than or equal to 10", "Less than or equal to 10", "Greater than 10", "Greater than 10"]
