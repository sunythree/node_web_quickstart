const path = require('path');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const koaViews = require('koa-views');
const koaLogger = require('koa-logger');
const config = require('./config');

const routes = require('./routes');

module.exports = (app) => {
	app.use(koaBody({ multipart: true }));

	app.use(koaLogger());

	app.use(koaStatic(config.static_dir.root, config.static_dir.options));

	app.use(koaViews(config.template.path, config.template.options));

	routes(app);

}

