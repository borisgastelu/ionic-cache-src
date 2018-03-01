import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage = HomePage;

    constructor(
        private _platform: Platform,
        private _statusBar: StatusBar,
        private _splashScreen: SplashScreen
    ) {
        this._platform.ready()
            .then(() => {
                this._statusBar.styleDefault();
                this._splashScreen.hide();
            });
    }
}