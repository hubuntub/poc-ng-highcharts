var
    allowCrossDomain,
    app,
    appDirName,
    bodyParser,
    errorHandler,
    express,
    livereload,
    logger,
    methodOverride,
    multer,
    path,
    fs,
    session;

fs = require('fs');
express = require('express');
path = require("path");
logger = require('morgan');
methodOverride = require('method-override');
session = require('express-session');
bodyParser = require('body-parser');
multer = require('multer');
errorHandler = require('errorhandler');
livereload = require('connect-livereload');
appDirName = "./";
app = express();
app.set('port', process.env.PORT);
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(multer());
app.use(express["static"](path.join(__dirname, appDirName)));
app.use(errorHandler());

allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Access-Control-Allow-Methods', '*');
    return next();
};

app.use(livereload({
    port: 35729,
    excludeList: [".woff", ".flv"]
}));
app.use(allowCrossDomain);

app.get('*', function (req, res) {
    if (!req.xhr) {
        return res.sendFile(appDirName + 'index.html');
    }
});

app.listen(app.get("port"), function () {
    return console.log("server listening, port: " + app.get("port") + " path: " + appDirName);
});
