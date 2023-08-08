// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
  numbers.forEach((num) => {
    if (num > value) filteredNumbers.push(num);
  });
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  // Change code above this line
  return filteredNumbers;
}
