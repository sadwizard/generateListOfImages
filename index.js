var express = require('express');
var multer  = require('multer');
var fs = require('fs');

var storage = multer.diskStorage({
	destination: './uploads/',
	filename: function (req, file, cb) {
	    cb(null,  file.originalname);
	}
});

var upload = multer({ storage: storage });
var app = express();

app.use(express.static('./'));
app.post('/uploadfile', upload.single('coverFont'), function(req, res) {
	res.sendStatus(200);
});

app.listen(6969, function() {console.log('Server starting localhost:6969')});