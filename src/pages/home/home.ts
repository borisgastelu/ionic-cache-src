import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {

    segment = 'images';

    images = [
        'http://sample-videos.com/img/Sample-png-image-500kb.png',
        'http://sample-videos.com/img/Sample-png-image-1mb.png',
        'http://sample-videos.com/img/Sample-jpg-image-500kb.jpg'
    ];

    videos = [
        'http://sample-videos.com/video/mp4/240/big_buck_bunny_240p_2mb.mp4'
    ];

}
