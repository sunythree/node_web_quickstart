
const KoaRouter = require('koa-router');
const router = new KoaRouter();

const site = require('../controllers/site');

router
    .get('/', site.index);

module.exports = router;
