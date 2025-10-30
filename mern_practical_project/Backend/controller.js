const users = [
    {
    id: 1,
    name: 'Kavishka'
    },
    {
    id: 2,
    name: 'Nimesh'
    }
    
];
const getUsers = (cb) =>{
    cb(users);
};

const getUserById = (id, cb) =>{
    const user = users.find(user => user.id === id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;