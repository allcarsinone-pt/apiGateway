const express = require('express');
const LogMockAdapter = require('./adapters/MockLogAdapter');
const { createProxyMiddleware } = require('http-proxy-middleware');

const makeApp = (logAdapter = new LogMockAdapter(), proxies = []) => {
    const app = express();
    app.set('logAdapter', logAdapter);
    for(let proxy of proxies) {
        console.log(`Proxying ${proxy.url} to ${proxy.host}`);
        app.use(proxy.url, createProxyMiddleware({target: proxy.host, changeOrigin: true}));
    }
    
    // Routes
    //app.use('/users', usersRoutes);
    //app.use('/stands', standsRoutes);
    //app.use('/vehicles', vehiclesRoutes);

    return app;
}

module.exports = makeApp;