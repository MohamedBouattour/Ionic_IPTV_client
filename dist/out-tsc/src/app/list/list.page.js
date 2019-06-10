import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
var ListPage = /** @class */ (function () {
    function ListPage(streamingMedia) {
        this.streamingMedia = streamingMedia;
        this.options = {
            successCallback: function () { },
            errorCallback: function (e) { },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        this.load();
    }
    ListPage.prototype.play = function (channel) {
        console.log(channel.link);
        this.streamingMedia.playVideo(channel.link, this.options);
    };
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage.prototype.load = function () {
        this.playlist = [
            {
                "name": "AR BEINSPORTS HD1",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13688"
            },
            {
                "name": "AR BEINSPORTS BKP1",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13687"
            },
            {
                "name": "AR BEINSPORTS HD2",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13686"
            },
            {
                "name": "AR BEINSPORTS BKP2",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13685"
            },
            {
                "name": "AR BEINSPORTS HD3",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13684"
            },
            {
                "name": "AR BEINSPORTS BKP3",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13683"
            },
            {
                "name": "AR BEINSPORTS HD4",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13682"
            },
            {
                "name": "AR BEINSPORTS BKP4",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13681"
            },
            {
                "name": "AR BEINSPORTS HD5",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13680"
            },
            {
                "name": "AR BEINSPORTS BKP5",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13679"
            },
            {
                "name": "AR BEINSPORTS HD6",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13678"
            },
            {
                "name": "AR BEINSPORTS BKP6",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13677"
            },
            {
                "name": "AR BEINSPORTS HD7",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13676"
            },
            {
                "name": "AR BEINSPORTS BKP7",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13675"
            },
            {
                "name": "AR BEINSPORTS HD8",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13674"
            },
            {
                "name": "AR BEINSPORTS BKP8",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13673"
            },
            {
                "name": "AR BEINSPORTS HD9",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13672"
            },
            {
                "name": "AR BEINSPORTS 9 BKP",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13587"
            },
            {
                "name": "AR BEINSPORTS HD10",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13670"
            },
            {
                "name": "AR BEINSPORTS BKP10",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/13669"
            },
            {
                "name": "AR BEINSPORTS HD11",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/24977"
            },
            {
                "name": "AR BEINSPORTS HD13",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/21202"
            },
            {
                "name": "AR BEINSPORTS HD14",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/21201"
            },
            {
                "name": "AR BEINSPORTS HD15",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/21200"
            },
            {
                "name": "AR BEINSPORTS HD16",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/21199"
            },
            {
                "name": "AR BEINSPORTS HD17",
                "link": "http://siptv-online.com:8789/Julien90/Julien90/21198"
            }
        ];
    };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.page.html',
            styleUrls: ['./list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StreamingMedia])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map