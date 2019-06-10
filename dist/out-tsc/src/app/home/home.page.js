import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, file) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.load();
    }
    HomePage.prototype.load = function () {
    };
    HomePage.prototype.pushList = function (ch) {
        this.navCtrl.navigateForward(ch);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, File])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map