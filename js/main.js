(function() {
    'use strict';

    // Utility functions

    // Gets the element from its ID
    function getElem(what) {
        return document.getElementById(what);
    }

    // Returns a NodeList to elements defined by their class name
    function getClass(what) {
        return document.getElementsByClassName(what);
    }

    // Delays stuff
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //  Post metadata
    let dateDiv     = getElem('date');
    let authorDiv   = getElem('author');

    // Date variables
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

    // The login system
    let submitButton    = getElem('submit-button');
    let app             = getElem('app');
    let login           = getElem('login-window');
    let closeButton		= getElem('close-button');

    submitButton.onclick = function() {
        if((document.forms['control-panel'].password.value === '') || 
            (document.forms['control-panel'].username.value === '')) {
                alert('One of the fields is empty!')
        } else {
            login.style.display = 'block';
            app.style.filter = 'blur(20px) brightness(40%)';
        }
    }

    closeButton.onclick = function() {
        login.style.display = 'none';
        app.style.filter = 'blur(0px) brightness(100%)';
    }

    // Tile description appearing on hover

    // Get tiles and boxes into NodeLists
    let tiles = getClass('tile_big');
    let boxes = getClass('tile_desc');

    for(let i = 0; i < tiles.length; ++i) {
        tiles[i].onmouseover = function() {
            boxes[i].style.opacity = '1.0';
            boxes[i].style.transform = 'scale(1.05)';
        }

        tiles[i].onmouseleave = function() {
            boxes[i].style.opacity = '0.0';
            boxes[i].style.transform = 'scale(1.0)';
        }

        if(i > 0) {
            boxes[i].style.bottom = '4vh';
        }
    }

    // Make sure the script runs after the DOM has loaded
    window.addEventListener('load', function () {
        writeDate();
        writeAuthor();
        // console.log('Loaded.');
    })

})();