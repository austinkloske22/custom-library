/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/rest", require("./routes/rest")());
};