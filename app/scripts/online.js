'use strict';

(function() {
    $(document).on('load', function() {

        document.addEventListener('offline', function(e) {
            alert('Offline');
            console.log("hol");
        });
        document.addEventListener('online', function(e) { alert('Online'); });
    });
})();