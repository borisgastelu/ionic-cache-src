import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { IonicCacheSrcModule } from 'ionic-cache-src'

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
    bootstrap: [IonicApp],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({
            name: `__cache-src-app`,
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        IonicCacheSrcModule
    ],
    declarations: [
        MyApp,
        HomePage
    ],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        File,
        FileTransfer,
        StatusBar,
        SplashScreen,

        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule { }