
if ( Meteor.isClient ) {
    Meteor.startup(function () {
    Session.setDefault("currentScreen","home");
    });
};

Template.user_loggedout.events({
  "click #login": function(e, tmpl){
    Meteor.loginWithFacebook({
      requestPermission: ['id','name','age_range','gender', 'locale', 'link', 'read_friendlists', 'friends_online_presence']
    }, function (err){
      if(err){
        console.log(err);
      } else{
      }
    });

  }
});

