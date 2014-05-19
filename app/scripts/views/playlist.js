define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var PlaylistView = Backbone.View.extend({
        template: JST['app/scripts/templates/playlist.ejs'],

        el: '#playlist',

        initialize: function () {
            this.render();
            this.collection.bind('add', this.render, this);

        },

        render: function () {
            console.log(this.collection.toJSON());
            this.$el.html(this.template({ collection: this.collection.toJSON() }));
            return this;
        }
    });

    return PlaylistView;
});
