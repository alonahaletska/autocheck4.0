// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  orderedItems.forEach((num) => (totalPrice += num));
  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  // Change code above this line
  return totalPrice;
}