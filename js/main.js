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
    slideSelector: '#jqt li a, slideleftSelector',
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

