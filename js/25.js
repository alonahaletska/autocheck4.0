// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).У нескольких пользователей могут быть одинаковые друзья,
//     сделай так чтобы возвращаемый массив не содержал повторений.


// Change code below this line

const getFriends = (users) => {
   return  users.flatMap(user => user.friends).filter((friend, ind, arr) => arr.indexOf(friend) === ind);
};
// Change code above this line