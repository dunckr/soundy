define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/playlist'
], function ($, _, Backbone, JST, Playlist) {
    'use strict';

    var PlayerView = Backbone.View.extend({
        template: JST['app/scripts/templates/player.ejs'],

        el: '#player',

        initialize: function () {
            this.render();
            this.collection.bind('add', function() {
            });
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        }

    });

    return PlayerView;
});
