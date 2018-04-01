const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))



 app.use(session({
 	secret:"user",
 	resave:true,
 	saveUninitialized:true,
 	cookie:{
 		maxAge:300000 //5 miniutes
 	}

 }))

 app.use('/', express.static(__dirname + '/front'));
 app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.get('/api', function (req, res) {
    return res.send({message: 'hello, pts ptsapi!' })
});

// default route
 
var teamInfoHandler=require('./back/handlers/teamInfoHandler');
// // app.get('/ptsapi/transOrder/:orderNo.json',auth.authCheck,packingHandler.getTransOrder);
app.get('/ptsapi/teaminfo/:user.json',teamInfoHandler.getInfo);
// app.post('/ptsapi/login.json',auth.login);
// app.get('/ptsapi/logout.json',auth.logout);

// var packingHandler = require('./controllers/packingHandler');
// app.get('/ptsapi/packing/get-order/:orderNo.json',auth.authCheck,packingHandler.getOrder);
// app.get('/ptsapi/packing/add-hu-to-order/:orderNo/:huNo.json',auth.authCheck,packingHandler.addHuToOrder);
// app.get('/ptsapi/packing/remove-hu-from-order/:orderNo/:huNo.json',auth.authCheck,packingHandler.removeHuFromOrder);
// app.get('/ptsapi/packing/add-item-to-hu/:orderNo/:huNo/:serialNo.json',auth.authCheck,packingHandler.addItemtoHu);
// app.get('/ptsapi/packing/remove-item-from-hu/:orderNo/:huNo/:serialNo.json',auth.authCheck,packingHandler.removeItemtoHu);

// var pickingHandler = require('./controllers/pickingHandler');
// app.get('/ptsapi/picking/get-order/:orderNo.json',auth.authCheck,pickingHandler.getOrder);
// app.get('/ptsapi/picking/add-item/:orderNo/:serialNo.json',auth.authCheck,pickingHandler.addItem);
// app.get('/ptsapi/picking/remove-item/:orderNo/:serialNo.json',auth.authCheck,pickingHandler.removeItem);
// app.get('/ptsapi/picking/set-status/:orderNo/:status.json',auth.authCheck,pickingHandler.setStatus);

// var poReceiptsHandler = require('./controllers/poReceiptsHandler');
// app.get('/ptsapi/poreceipts/get-order/:orderNo.json',auth.authCheck,poReceiptsHandler.getOrder);
// app.get('/ptsapi/poreceipts/add-item/:orderNo/:serialNo.json',auth.authCheck,poReceiptsHandler.addItem);
// app.get('/ptsapi/poreceipts/remove-item/:orderNo/:serialNo.json',auth.authCheck,poReceiptsHandler.removeItem);

// var woReceiptsHandler = require('./controllers/woReceiptsHandler');
// app.get('/ptsapi/woreceipts/get-order/:orderNo.json',auth.authCheck,woReceiptsHandler.getOrder);
// app.get('/ptsapi/woreceipts/add-item/:orderNo/:serialNo.json',auth.authCheck,woReceiptsHandler.addItem);
// app.get('/ptsapi/woreceipts/remove-item/:orderNo/:serialNo.json',auth.authCheck,woReceiptsHandler.removeItem);


// app.get('*', function(req, res){
//    res.send('Sorry, this is an invalid URL.');
// });
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});