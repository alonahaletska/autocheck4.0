// Дополни функцию sortByDescendingFriendCount(users) так,
//     чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей(свойство friends).


// Change code below this line
const sortByDescendingFriendCount = users => {
   return [...users].sort((a,b) => b.friends.length - a.friends.length)
};
// Change code above this line