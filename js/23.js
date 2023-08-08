// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//     возраст которых(свойство age) попадает в промежуток от minAge до maxAge.


// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter(user => user.age >= minAge && user.age <= maxAge)

};
// Change code above this line