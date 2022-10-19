const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
 res.send(`It is ${req.query.name || req.body.name || 'Wednesday'}!`);
});
