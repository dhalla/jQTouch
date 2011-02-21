// jQuery
$(document).ready(function() {  

    trackr.init();

})

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

var trackr = {
    
    init: function() {

        $('#settings_form .submit').click(function() {
            trackr.saveSettings();
        })
    
    },
    
    /**
     * Save settings to local Storage
     *
     */
    saveSettings: function(form) {
    
        // Save PLZ
        localStorage.setItem('plz', $('#settings_form #plz').val());
        
        // Save Sparten
        var sparten = [];
        $('#settings_form input:checked').each(function(index) {
            sparten[index] = ($(this).val());
        });
        localStorage.setItem('sparten',sparten);       
    
    }


}
