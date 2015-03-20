'use strict';

Tinytest.add('MTurk - globals', function(test) {
  test.isNotNull(MTurk);
});

if(Meteor.isServer){
  Tinytest.add('MTurk - instance test', function(test) {
    var settings = {
      'creds': {
        'accessKey': 'accessKey',
        'secretKey': 'secretKey'
      }
    };
    var mTurk = new MTurk(settings);
    test.isNotNull(mTurk);
  });
}
