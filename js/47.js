// Дополни функцию getSortedFriends(users) так,
// чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту


// Change code below this line
const getSortedFriends = users => 
[...users]
.flatMap(user => user.friends)
.filter((val, ind, arr) => arr.indexOf(val) === ind)
.sort((a,b) => a.localeCompare(b));
// Change code above this line