# ionic-cache-src

Ionic module for caching resources, works for any HTML tag, use storage and filesystem.

This library works with Ionic Framework (v >= 2.0), the supported platforms being:

- Android
- iOS

## [Installation](#installation)
First you have to install the module through npm:

```shell
$ npm install --save ionic-cache-src
```

Afterwards, you need to import the `IonicCacheSrcModule` in your module:

```ts
import { NgModule } from '@angular/core';
import { IonicCacheSrcModule } from 'ionic-cache-src';
 
@NgModule({
  imports: [IonicCacheSrcModule]
})
export class YourModule {};
```

**Note:** Install required cordova plugins

```shell
$ ionic cordova plugin add cordova-plugin-file
$ ionic cordova plugin add cordova-plugin-file-transfer
```

## [Usage](#usage)
Change `src` to `cacheSrc`

```html
<img cacheSrc="http://sample-videos.com/img/Sample-png-image-1mb.png"/>
```

```html
<div cacheSrc="http://sample-videos.com/img/Sample-jpg-image-500kb.jpg"></div>
```

```html
<video cacheSrc="http://sample-videos.com/video/mp4/240/big_buck_bunny_240p_2mb.mp4"></video>
```

<!-- 
Edit config.xml file:
Add <access origin="*"/>
For Android add:
  <access origin="cdvfile://*"/>
  <allow-intent href="cdvfile://*"/>
  <preference name="AndroidPersistentFileLocation" value="Compatibility" />
For iOS add <preference name="iosPersistentFileLocation" value="Library"/>
-->

## Contribution
- **Having an issue**? or looking for support? [Open an issue](https://github.com/borisgastelu/ionic-cache-src/issues/new) and we will get you the help you need.
- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:


[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/borisgastelu)
