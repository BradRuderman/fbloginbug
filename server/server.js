Accounts.onCreateUser(function (options, user) {
        if (user.services.facebook){
                profile = {
                        name : user.services.facebook.name,
                        email : user.services.facebook.email,
                        photo : "http://graph.facebook.com/" + user.services.facebook.id + "/picture",
                        friends: [],
                        sentFriends: []
                }
                user.profile = profile;
        }
        return user;
});