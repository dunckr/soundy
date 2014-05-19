define([
    'soundApi'
], function (SoundApi) {
    'use strict';

    window.SC.initialize({
        client_id: '93515a34586ed611d1630775eceda129'
    });

    var Soundcloud = function() {};
    Soundcloud.prototype.load = function(id) {
        var iframe = document.getElementById('sc-widget');
        var widget = window.SC.Widget(iframe);
        var newSoundUrl = 'http://api.soundcloud.com/tracks/' + id;
        widget.load(newSoundUrl, {
            show_artwork: false
        });
        widget.bind(window.SC.Widget.Events.READY, function() {
          widget.play();
        });
    };

    return new Soundcloud();
});
