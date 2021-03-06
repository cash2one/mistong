requirejs.config({
    baseUrl: '/src',
    paths: {
        ti: '/ti/js',
        jquery:'/common/js/libs/jquery/dist/'
    },
    shim: {
        // ti:{
        //     deps:["jquery"]
        // },
        "jquery.highlight": ["jquery"]
        //backbone: {
        //    deps: ['jquery', 'underscore'],
        //    exports: 'Backbone'
        //},
        //underscore: {
        //    exports: '_'
        //}
    }
});

// console.log(requirejs.config());
//require.config({
//    baseUrl: '/scripts',
//    paths: {
//        'facebook'     : '//connect.facebook.net/en_US/all',
//        'requirejs'     : '../bower_components/requirejs/require',
//        'react'       : '../bower_components/react/react-with-addons',
//        'underscore'    : '../bower_components/lodash/dist/lodash',
//        'futures-requirejs' : '../bower_components/futures-requirejs/future',
//        'jquery'      : '../bower_components/jquery/jquery',
//        'phaser.filters'  : '../bower_components/phaser/filters/',
//        'phaser'      : '../thirdParty/phaser/Phaser',
//        'snap'       : '../bower_components/Snap.svg/dist/snap.svg',
//        'proton'      : '../thirdParty/Proton',
//        'copyProperties'  : '../thirdParty/copyProperties',
//        'flux'       : '../bower_components/flux/dist/Flux',
//        'eventEmitter'   : '../bower_components/eventEmitter/EventEmitter',
//        'pixi'       : '../bower_components/pixi/bin/pixi',
//        'crossroads'    : '../bower_components/crossroads/dist/crossroads',
//        'signals'      : '../bower_components/js-signals/dist/signals',
//        'hasher'      : '../bower_components/hasher/dist/js/hasher',
//        'async'       : '../bower_components/async/lib/async',
//        'socket.io-client' : '../bower_components/socket.io-client/dist/socket.io',
//        'html2canvas'    : '../bower_components/html2canvas/build/html2canvas.min',
//        'hammer'      : '../bower_components/hammerjs/hammer',
//        'touch-emulator'  : '../bower_components/hammer-touchemulator/touch-emulator',
//        'moment'      : '../bower_components/moment/moment',
//        'tinygradient'   : '../bower_components/tinygradient/tinygradient',
//        'page'       : '../bower_components/page/index',
//        'faker'       : '../thirdParty/Faker',
//        'perlin'      : '../thirdParty/Perlin',
//        'tinycolor'     : '../vendors/tinycolor',
//        'client'      : './',
//        'errors'      : './errors',
//        'server'      : '../../server',
//    },
//    packages: [{
//        name   : 'API2',
//        location : '../bower_components/api2/src/',
//        main   : 'API'
//    }],
//    shim: {
//        'phaser.filters/Fire': {
//            deps: ['phaser'],
//        },
//        'page': {
//            exports: 'page'
//        },
//        'snap' : {
//            exports: 'Snap'
//        },
//        'html2canvas' : {
//            exports: 'html2canvas'
//        },
//        'facebook' : {
//            exports: 'FB'
//        },
//        // 'underscore': {
//        //   deps: [],
//        //   exports: '_'
//        // },
//        'phaser': {
//            exports: 'Phaser'
//        },
//        'pixi': {
//            exports: 'PIXI'
//        },
//        'hammer': {
//            exports: 'Hammer'
//        },
//        'touch-emulator': {
//            exports: 'TouchEmulator'
//        },
//        'proton': {
//            exports: 'Proton'
//        },
//        'moment': {
//            exports: 'moment'
//        }
//    }
//});