var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
    node: 'http://localhost:9200',
    // log:'trace'
});

module.exports = client;  