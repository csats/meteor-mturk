Tinytest.add("MTurk Object Test", function(test) {
  test.isNotNull(MTurk)
})

if(Meteor.isServer){
  Tinytest.add("MTurk Instance Test", function(test) {

      var settings = {
        'creds': {
          'accessKey': 'accessKey',
          'secretKey': 'secretKey'
        }
      }

      var mTurk = new MTurk(settings);
      test.isNotNull(mTurk);
    
  });
}