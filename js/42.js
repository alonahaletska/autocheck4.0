// Дополни функцию sortByAscendingBalance(users) так,
//     чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса(свойство balance).

// Change code below this line
const sortByAscendingBalance = users => {
   return [...users].sort((a,b) => a.balance - b.balance)
};
// Change code above this line