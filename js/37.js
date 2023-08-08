// Дополни функцию getTotalFriendCount(users) так,
//     чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.



const getTotalFriendCount = users => {
   return users.reduce(((total, user) => total + user.friends.length),0)
};
