define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/soundcloud'
], function ($, _, Backbone, JST, Soundcloud) {
    'use strict';

    var SearchView = Backbone.View.extend({
        template: JST['app/scripts/templates/search.ejs'],

        el: '#search',

        events: {
            'keyup input': 'search'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        },

        search: function(e) {
            if (e.keyCode === 13) {
                var query = this.$('searchInput').val();
                var self = this;
                Soundcloud.get('/tracks', { q: query }, function(tracks) {
                    self.collection.add(tracks);
                });
            }
        }
    });

    return SearchView;
});
