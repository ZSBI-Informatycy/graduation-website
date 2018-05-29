(function() {
    'use strict';

    // Utility function
    function getElem(what) {
        return document.getElementById(what);
    }

    let dateDiv     = getElem('date');
    let authorDiv   = getElem('author');

    let today   = new Date();
    let dd      = today.getDate();
    let mm      = today.getMonth() + 1;
    let yyyy    = today.getFullYear();

    // Write the date
    function writeDate() {
        if(dd < 10) {
            dd = '0' + dd;
        }

        if(mm < 10) {
            mm = '0' + mm;
        }

        today = dd + '/' + mm + '/' + yyyy;
        dateDiv.innerHTML = today;
    }

    // Set an author name, this being just the owner for now
    let author = 'Marek';
    function writeAuthor() {
        authorDiv.innerHTML = author;
    }

    let submitButton    = getElem('submit-button');
    let app             = getElem('app');
    let window          = getElem('login-window');

    submitButton.onclick = function() {
        if((document.forms['control-panel'].password.value === '') || 
            (document.forms['control-panel'].username.value === '')) {
                alert('One of the fields is empty!')
        }


    }

    window.addEventListener('load', function () {
        writeDate();
        writeAuthor();
        // console.log('Loaded.');
    })

})();