// Дополни функцию sortByName(users) так,
//     чтобы она возвращала массив пользователей отсортированный по их имени(свойство name) в алфавитном порядке.


// Change code below this line
const sortByName = users => {
return [...users].sort((a,b) => a.name.localeCompare(b.name))
}
// Change code above this line