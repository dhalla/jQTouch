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

        trackr.populateFormFields();
        
        $('#settings_form .submit').click(function() {
            trackr.saveSettings();
        });
        
        $('#delete_settings .submit').click(function() {
            trackr.deleteData();
        });
    
    },
    
    /**
     * Populate Forms with Values from local Storage
     *
     */
    populateFormFields: function() {
    
        // PLZ
        if(localStorage.getItem('plz')) {
            $('#settings_form #plz').val(localStorage.getItem('plz'));
        }
        
        // Sparten
        if(localStorage.getItem('sparten')) {
            var sparten = localStorage.getItem('sparten').split(',');
             $('#settings_form input:checkbox').each(function() {
                if ($.inArray($(this).attr('name'), sparten) >= 0) {
                    $(this).attr('checked', true);                   
                }
            });
        } 
                
    },
    
    /**
     * Save settings to local Storage
     *
     */
    saveSettings: function() {
    
        // Save PLZ
        localStorage.setItem('plz', $('#settings_form #plz').val());
        
        // Save Sparten
        var sparten = [];
        $('#settings_form input:checked').each(function(index) {
            sparten[index] = ($(this).val());
        });
        localStorage.setItem('sparten',sparten);       
    
    },
    
    /**
     * Delete all Settings, clear local Storage
     *
     */
    deleteData: function() {
        
        var deleted = false;
        
        if ($('#delete_settings input[name="einstellungen"]').attr('checked')) {
            localStorage.removeItem('plz');
            localStorage.removeItem('sparten');
            $('#settings_form input:checkbox').each(function() { $(this).attr('checked', false) });
            console.log('PLZ/Sparten gelöscht');
            deleted = true;
        };
        if ($('#delete_settings input[name="messwerte"]').attr('checked')) {
            localStorage.removeItem('messwerte');
            $('#settings_form #plz').val('PLZ');
            console.log('Messwerte gelöscht');            
            deleted = true;
        };

        if (deleted) {
            alert("Lokale Daten gelöscht.");
            window.location.hash = '#settings';
        }
    
    }

}
