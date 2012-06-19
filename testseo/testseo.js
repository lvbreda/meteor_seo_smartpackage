if (Meteor.is_client) {
  col = new Meteor.Collection("col");
  Template.hello.greeting = function () {
    return "Welcome to testseo.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
  Meteor.startup(function(){
    Meteor.autoUpdateSeo();
  });
  
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}