const newman = require('newman'); 
newman.run({ 
 //collection: require('./dUser.json'), //  pointing to local JSON file. 
 collection: 'https://api.postman.com/collections/18755112-3d3105eb-ea4c-4e67-ad18-4704735bedde?access_key=PMAT-01H1XA9M5TFDX6EGW7KM5W1FWV',
   // pointing  to local env file 
 iterationCount: 1, 
 reporters: 'htmlextra', 
 reporter: { 
 htmlextra: { 
 export: './Reports/report.html', // If not specified, the file  will be written to `newman/` in the current working directory.  } 
 } 
  }
}, function (err) { 
 if (err) { throw err; } 
 console.log('collection run complete!'); 
}); 
