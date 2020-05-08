/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
const path = require('path');

var cds = require("@sap/cds");
var express = require("express");
var app = express();

var odataURL = "/odata/v4/CatalogService";
cds.connect();
cds.serve("gen/csn.json", {
		crashOnError: false
	})
	.at(odataURL)
	.in(app)
	.catch((err) => {
		process.exit(1);
	});

app.use('/customlibrary', express.static(path.join(__dirname, 'resources')));

//Setup Additonal Node.js Routes
require("./router")(app, server);

var server = require("http").createServer();
var port = process.env.PORT || 3000;

server.on("request", app);

server.listen(port, function () {
	console.info("srv: " + server.address().port);
});