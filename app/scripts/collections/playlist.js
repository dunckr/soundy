define([
    'underscore',
    'backbone',
    'models/song'
], function (_, Backbone, Song) {
    'use strict';

    var Playlist = Backbone.Collection.extend({
        model: Song
    });

    return new Playlist();
});
