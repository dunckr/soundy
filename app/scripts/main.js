'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        playerApi: 'https://w.soundcloud.com/player/api',
        soundcloud: 'http://connect.soundcloud.com/sdk'
    }
});

require([
    'backbone',
    'routes/router'
], function (Backbone, Router) {
    new Router();
    Backbone.history.start();
});
