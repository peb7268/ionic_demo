angular.module('starter.services', [])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    address: '4787 Xbx Way',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    phone: '678-617-5387'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    address: '3291 Special Dr',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    phone: '678-612-5482'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    address: '4787 I like Pizza Bldv.',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg',
    phone: '770-312-5512'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    address: '4787 Hillside Dr.',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    phone: '404-867-5309'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    address: '1234 Astreet Somewhere ln.',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg',
    phone: '304-610-5182'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
