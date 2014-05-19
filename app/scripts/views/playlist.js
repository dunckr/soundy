define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/soundcloud'
], function ($, _, Backbone, JST, Soundcloud) {
    'use strict';

    var PlaylistView = Backbone.View.extend({
        template: JST['app/scripts/templates/playlist.ejs'],

        el: '#playlist',

        events: {
          'click li': 'clicked'
        },

        initialize: function () {
            this.render();
            this.collection.bind('add', this.render, this);
        },

        render: function () {
            this.$el.html(this.template({ collection: this.collection.toJSON() }));
            return this;
        },

        clicked: function(e) {
            var id = $(e.target).text().trim();
            console.log(id);

            Soundcloud.load(id);
        }
    });

    return PlaylistView;
});
