let filteredUsers = users.filter(function(user) {
    return user.id % 2 === 0;
});
console.log(filteredUsers)