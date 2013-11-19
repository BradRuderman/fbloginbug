if (Meteor.isServer) {
        Meteor.startup(function () {
                Accounts.loginServiceConfiguration.remove({
                        service: "facebook"
                });

                Accounts.loginServiceConfiguration.insert({
                    service: "facebook",
                    appId: "580459485353182",
                    secret: "f047833b61cff588e17dc7968bf40d25"
                });
        });
}