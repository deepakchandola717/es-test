var client = require('./connection.js');

client.indices.putMapping({  
  index: 'gov',
  type: 'constituencies',
  includeTypeName:true,
  body: {
    properties: {
      'constituencyname': {
        'type': 'keyword', // type is a required attribute if index is specified
        // 'index': 'not_analyzed'
      },
      'electorate': {  
        'type': 'integer'
      },
      'validvotes': {  
        'type': 'integer'
      }
    }
  }
},function(err,resp,status){
    if (err) {
      console.log(err);
    }
    else {
      console.log(resp);
    }
});