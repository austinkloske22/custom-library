/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, newcap: 0*/
/*eslint-env node, es6 */
"use strict";

var express = require("express"),
	app = express.Router();

	module.exports = function () {
		
		app.use(express.json());

		app.get("/test", function(req, res) {
			return res.status(200).send("test complete");
		});

	return app;
};

	