// Initialize Add2Home
// @see http://cubiq.org/add-to-home-screen
var addToHomeConfig = {
	animationIn: 'bubble',
	animationOut: 'drop',
	lifespan:10000,
	expire:2,
	touchIcon:true,
};

// Initialize jQTouch
// @see https://github.com/senchalabs/jQTouch/wiki/initoptions
$.jQTouch({
    addGlossToIcon: true,
    useFastTouch: true,
    icon: '/img/homescreen-icon-small.png',   
    statusBar: 'black',
    startupScreen: '/img/startupscreen-small.png',
    preloadImages: [
        '/img/10-medical.png',
        '/img/11-clock.png',
        '/img/16-line-chart.png',
        '/img/44-shoebox.png',
        '/img/57-download.png',
        '/img/60-signpost.png',
        '/img/96-book.png',
        '/img/homescreen-icon-small.png',
        '/img/startupscreen-small.png',
    ]
}); 
/*

var jqt = {

    addGlossToIcon:     true,
    slideSelector:      '.slide', 
    useFastTouch:       true,
    icon:               '/img/homescreen-icon-small.png',   
    statusBar:          'black',
    startupScreen:      '/img/startupscreen-small.png',
    preloadImages:      [
        '/img/homescreen-icon-small.png',
        '/img/startupscreen-small.png',
        '/img/10-medical.png',
        '/css/jqt-themes/apple/img/chevron.png',
        '/css/jqt-themes/apple/img/loading.gif'
    ],    
    
    init: function(e) {
        
    },
    
    test: function(e) {
        alert("xxxx");
    }
    
    

}
*/
