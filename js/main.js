// Menu
var menu;
function loaded() {
	document.addEventListener('touchmove', function(e){ e.preventDefault(); e.stopPropagation(); });
	menu = new slideInMenu('slidedownmenu', false);
}


// Initialize jQTouch
// @see https://github.com/senchalabs/jQTouch/wiki/initoptions
$.jQTouch({
    addGlossToIcon: true,
    useFastTouch: true,
    icon: '/img/homescreen-icon-small.png',   
    statusBar: 'black',
    startupScreen: '/img/startupscreen-small.png',
    slideleftSelector: '#jqt li a, .slide',
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

// jQuery
$(document).ready(function() {
    
    loaded();

})


var trackr = {



}
