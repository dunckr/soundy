define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'playerApi',
    'views/player',
    'views/search',
    'views/playlist',
    'collections/playlist',
    'soundcloud'
], function ($, _, Backbone, JST, PlayerApi, PlayerView, SearchView, PlaylistView, Playlist, Soundcloud) {
    'use strict';

    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/app.ejs'],

        el: $('#app'),

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            this.subViews();
            return this;
        },

        subViews: function() {
            new PlayerView({ collection: Playlist });
            new SearchView({ collection: Playlist });
            new PlaylistView({ collection: Playlist });
        }

    });

    return AppView;
});
