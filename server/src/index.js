
const Koa = require('koa');
const middlewares = require('./middlewares');
const config = require('./config');

const app = new Koa();

middlewares(app, config);

app.listen(config.server.port, ()=>{
	console.log(`app listen ${config.server.port} ...`);
});