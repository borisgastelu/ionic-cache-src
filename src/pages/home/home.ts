import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {

    segment = 'images';

    images = [
        'https://html5box.com/html5gallery/images/Toronto_1024.jpg',
        'http://wallpul.info/i/2016/12/wallpapers-wallpaper-full-hd-4k-xp-download-computer-hd-backgrounds.jpg',
        'http://wallpul.info/i/2016/12/wallpapers-wallpaper-full-hd-4k-wallpapers-4k-ultra-hd-taringa-widescreen-desktop-backgrounds.jpg',
        'http://wallpul.info/i/2016/12/wallpapers-wallpaper-full-hd-4k-full-hd-widescreen-wallpapers-hd.jpg'
    ];

    videos = [
        // 'https://img-9gag-fun.9cache.com/photo/anMyBNV_460sv.mp4',
        // 'https://img-9gag-fun.9cache.com/photo/aGj0GR6_460sv.mp4'
    ];

}
