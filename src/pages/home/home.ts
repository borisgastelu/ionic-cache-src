import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { CacheSrcService } from 'ionic-cache-src';

@Component({
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        private _alertCtrl: AlertController,
        private _cacheSrv: CacheSrcService
    ) { }

    segment = 'images';

    images = [
        'http://sample-videos.com/img/Sample-png-image-500kb.png',
        'http://sample-videos.com/img/Sample-png-image-1mb.png',
        'http://sample-videos.com/img/Sample-jpg-image-500kb.jpg'
    ];

    videos = [
        'http://sample-videos.com/video/mp4/240/big_buck_bunny_240p_1mb.mp4'
    ];

    remove(url: string) {
        let alert = this._alertCtrl.create({
            subTitle: 'Do you want to delete this resource from the cache?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this._cacheSrv.remove(url)
                            .subscribe(removedItem => {
                                console.log('Deleted from cache: ', removedItem);
                            });
                    }
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        });

        alert.present();
    }

    clear() {
        this._cacheSrv.clear()
            .subscribe(removedItems => {
                console.log(removedItems);
            });
    }

}
