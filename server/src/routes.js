const path = require('path');
const glob = require('glob');
const KoaRouter = require('koa-router');

module.exports = app => {

    const r = new KoaRouter();
    const routes = glob.sync(path.resolve(__dirname, './**/routes/**/*.js'));

    routes.forEach((item) => {
        r.use(require(item).routes());
    });

    app.use(r.routes());
};
