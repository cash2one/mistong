esl.config( {
    baseUrl: './src',
    paths: {
    	jquery:'common/js/libs/jquery/dist/jquery.min',
        css: './src/plugin/css'
    },
    urlArgs: 'v=2.0.0'
} );
esl(['jquery'],function  ($) {
	// body...
	console.log($);
});

var Import ={}