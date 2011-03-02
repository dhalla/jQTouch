// jQuery
$(document).ready(function() {  

    trackr.init();

})

// Initialize jQTouch
// @see https://github.com/senchalabs/jQTouch/wiki/initoptions
var jqt = new $.jQTouch({
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

        trackr.populateSettings();
        trackr.setCounterFields();
        
        $('#settings_form .submit').click(function() {
            trackr.saveSettings();
        });
        
        $('#delete_settings .submit').click(function() {
            trackr.deleteData();
        });
        
        $('#save_counter').bind('submit', function(){
            trackr.saveCounterValues($(this));
        });        
    
    },
    
    
    /**
     * Set Counter-Fields for specific branches
     * 
     */
    setCounterFields: function() {
        
        var sparten = localStorage.getItem('sparten').split(',');
        var $save_form = $('form#save_counter li p');
        
        // Remove all Input Fields, if present
        $('form#save_counter .counter').parent().remove();
        
        // Rebuild Input Fields according to Settings
        for (var i = 0; i < sparten.length; i++){ 
            field = '<li><input class="counter" type="number" name="'+ sparten[i] +'" placeholder="'+ sparten[i] +'"></li>';
            $save_form.parent().after(field);            
        } 
       
    },
    
    
    /**
     * Save Zählerwerte to local Storage
     *
     */
    saveCounterValues: function(form) {
    
        var consumption = this.hasItem('consumption');
        consumption =  (consumption) ? JSON.parse(consumption) : { 'wasser': {}, 'gas': {}, 'strom':{} };
        
        var vals = form.serializeArray();

        $.each(vals, function(i, val) {
            console.log();
            var date = new Date;
            switch(val.name) {
                case 'strom': consumption.strom[date.getTime()] = val.value; break;
                case 'gas': consumption.gas[date.getTime()] = val.value; break;
                case 'wasser': consumption.wasser[date.getTime()] = val.value; break;
            } ; 
  

        });
        
        localStorage.setItem('consumption', JSON.stringify(consumption));        
        console.log(consumption);        
        return false;
           
    },
    
    
    /**
     * Populate Forms with Values from local Storage
     *
     */
    populateSettings: function() {
    
        // PLZ
        var plz = this.hasItem('plz');
        if(plz) {
            $('#settings_form #plz').val(plz);
        }

        // Sparten
        var sparten_cb = $('#settings_form input:checkbox');
        var sparten = this.hasItem('sparten');

        if(sparten) {
             // Set checkboxen according to settings
             sparten_cb.each(function() {
                $(this).attr('checked', false);
                if ($.inArray($(this).attr('name'), sparten.split(',')) >= 0) {
                    $(this).attr('checked', true);                   
                }
            });
        } else {
            // Init sparten in local Storage if not already set
            var sparten_set = [];
            sparten_cb.each(function(index) {
                sparten_set[index] = $(this).attr('name');
            });
            localStorage.setItem('sparten',sparten_set);
        }; 
                        
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
        this.setCounterFields();  
        
        alert("Einstellungen gespeichert.");     
    
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
            $('#settings_form #plz').val('PLZ');
            console.log('PLZ/Sparten gelöscht');
            deleted = true;
        };
        
        if ($('#delete_settings input[name="messwerte"]').attr('checked')) {
            localStorage.removeItem('messwerte');
            console.log('Messwerte gelöscht');            
            deleted = true;
        };
        
        if (deleted == true) {
            alert("Lokale Daten gelöscht.");
            //jqt.goTo('#settings', 'slidedown');
            jqt.goBack('#settings', 'slidedown');
        }
    
    },
    
    
    /**
     * Get List with Counter-Values
     *
     */
    getCounterList: function() {
    
    
    },
    
    
    /**
     * Check if a key has already set
     *
     */
    hasItem: function(key) {
    
        var db = localStorage.getItem(key);
        if ( db != null) {
            return db;
        } else { 
            return false;
        }        
        
    }
    

}


