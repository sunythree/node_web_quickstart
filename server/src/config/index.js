const path = require('path');

module.exports = {
    // server端配置: 端口
    server: {
        port: 3000
    },
    // 页面模版配置: 路径和渲染引擎
    template: {
        path: path.resolve(__dirname, './../../../var/dist/views'),
        options: {
            map: { html: 'ejs' }
        }
    },
    // 静态资源配置: 路径
    static_dir: {
        root: path.resolve(__dirname, './../../../var/dist'),
        options: {}
    },
};