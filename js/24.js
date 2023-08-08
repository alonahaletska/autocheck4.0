// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.


// Change code below this line
const getUsersWithFriend = (users, friendName) => {
return users.filter(user => user.friends.includes(friendName))
};
// Change code above this line