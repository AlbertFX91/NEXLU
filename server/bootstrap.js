Meteor.startup(function () {
    // code to run on server at startup
    if (Meteor.users.find().count() === 0) {
        createUsers();
    }
    
});


function createUsers(){
	var id_user1 = Accounts.createUser({
            username: 'user1',
            email: 'user1@gmail.com',
            password: 'user1',
    });
    var id_user2 = Accounts.createUser({
            username: 'user2',
            email: 'user2@gmail.com',
            password: 'user2',
    });
    var id_user3 = Accounts.createUser({
            username: 'user3',
            email: 'user3@gmail.com',
            password: 'user3',
    });
}