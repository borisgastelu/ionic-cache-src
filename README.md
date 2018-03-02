# ionic-cache-src

Ionic module for caching resources, works for any HTML tag, use storage and filesystem. Uses [Ionic Storage](https://ionicframework.com/docs/storage/) so it supports IndexedDB, SQLite (Cordova), WebSQL

[![NPM](https://nodei.co/npm/ionic-cache-src.png?stars&downloads)](https://nodei.co/npm/ionic-cache-src/)
[![NPM](https://nodei.co/npm-dl/ionic-cache-src.png?months=3&height=1)](https://nodei.co/npm/ionic-cache-src/)

## [Basic Usage](#basic-usage)

- As Directive (html) change `src` to `cacheSrc`

  ```html
  <img cacheSrc="http://sample-videos.com/img/Sample-png-image-1mb.png"/>
  ```

  ```html
  <div cacheSrc="http://sample-videos.com/img/Sample-jpg-image-500kb.jpg"></div>
  ```

  ```html
  <video cacheSrc="http://sample-videos.com/video/mp4/240/big_buck_bunny_240p_1mb.mp4"></video>
  ```
  
- You can use a preload image while the resource is downloading. It works for any tag. By default it uses a predefined image.

  ```html
  <img [cacheSrc]="IMAGE_URL" [preImage]="PRELOAD_IMAGE_PATH" />
  ```
  
## [Installation](#installation)

Via [NPM](https://www.npmjs.com/package/ionic-cache-src)
```shell
$ npm install --save ionic-cache-src @ionic/storage --save
```

or [Yarn](https://yarnpkg.com/en/package/ionic-cache-src)
```shell
$ yarn add ionic-cache-src @ionic/storage
```

- Afterwards, you need to import the `IonicCacheSrcModule` in your module:

```ts
import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

import { IonicCacheSrcModule } from 'ionic-cache-src';

@NgModule({
    imports: [
        ...
        IonicStorageModule.forRoot(),
        IonicCacheSrcModule
    ],
    providers: [
        File,
        FileTransfer,
        ...
    ]
})
export class YourModule {};
```

## [Dependencies](#dependencies)
Make sure to install the following ionic modules and cordova plugins:

- [IonicStorageModule](https://ionicframework.com/docs/storage/)
- [File](https://ionicframework.com/docs/native/file/) plugin
- [FileTransfer](https://ionicframework.com/docs/native/file-transfer/) plugin

## [Advanced Usage](#advanced-usage)

- Your typescript file. Use `cache` or `cacheAll` methods to fetch resources. (Note: Just first time, resource is downloaded and saved in filesystem)
    
    ```ts
    import { Component } from '@angular/core';
    import { CacheSrcService } from 'ionic-cache-src';

    @Component({
        selector: 'home-page',
        templateUrl: 'home.html'
    })
    export class HomePage {
    
        let paths: string[] = [];

        constructor(private _cacheSrv: CacheSrcService) {
            let images = [
                'http://sample-videos.com/img/Sample-png-image-500kb.png'
                'http://sample-videos.com/img/Sample-png-image-1mb.png'
                'http://sample-videos.com/img/Sample-jpg-image-500kb.jpg'
            ];

            // Use cache() for one resource
            this._cacheSrv.cacheAll(images)
                .subscribe(cacheItems => {
                    this.paths = cacheItems.map(item => item.path);
                });
        }
        
    }
    ```

- Your html file

    ```html
    <img *ngFor="let path of paths" [cacheSrc]="path"/>
    ```

## Instance Members

### - cache(url)
If not exists, saves a resource in storage and filesystem, otherwise, returns the saved item.
Param | Type | Description
--- | --- | ---
`url` | string | URL of the server to download the file, as encoded by encodeURI().

- Return **Observable<[CacheItem](#cacheitem)>**

### - cacheAll(urls)
Gets a list of resources and evaluates which of them not exists in storage and filesystem and starts download. Otherwise, returns all the saved items.
Param | Type | Description
--- | --- | ---
`urls` | string[] | List of URLs of the server to download the file, as encoded by encodeURI().

- Return **Observable<[CacheItem](#cacheitem)[]>**

### - find(url)
Returns a value of the first item in storage and filesystem that satisfies the provided url. Otherwise null is returned.
Param | Type | Description
--- | --- | ---
`url` | string | URL of the server to download the file, as encoded by encodeURI().

- Return **Observable<[CacheItem](#cacheitem)>**

### - remove(url)
Removes any item associated with this url. Returns the deleted item with status "deleted".
Param | Type | Description
--- | --- | ---
`url` | string | URL of the server to download the file, as encoded by encodeURI().

- Return **Observable<[CacheItem](#cacheitem)>**

### - clear()
Clears the entire ionic-cache-src storage and filesystem. Returns a list of items with status 'deleted'.
- Return **Observable<[CacheItem](#cacheitem)[]>**

### [_CacheItem_](#cacheitem)

Param | Type | Description
--- | --- | ---
`url` | string | URL from where it was downloaded.
`key` | string | Name of the saved file.
`path` | string | File path of the saved resource.
`status` | string | Shows "incomplete" while resource is downloading, "complete" once it is saved.

## Supported Platforms
This module works with Ionic Framework (v >= 2.0), the supported platforms being:
- Android
- iOS

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
<!--- Got a **new feature or a bug fix**? Fork the repo, make your changes, and submit a pull request.-->

## Support this project
If you find this project useful, please star the repo to let people know that it's reliable. Also, share it with friends and colleagues that might find this useful as well. Thank you :smile:


[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/borisgastelu)