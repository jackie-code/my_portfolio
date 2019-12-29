
function showPage() {
    $('.stuff').show();
}

function hidePage() {
    $('.stuff').hide();
}

function showHeroExpand() {
    $('.heroExpand').show();
}

function hideHeroExpand() {
    $('.heroExpand').hide();
}

/* **************event listeners****************  */
function eventListeners(){

    $('header').on('click', '.hero', function () {
        hidePage();
        showHeroExpand();
        $('header').hide();
        $('footer').hide()
    });

    $('.heroExpand').on('click', '.x', function () {
        showPage();
        hideHeroExpand();
        $('header').show();
        $('footer').show();
    })

    // here I want to hover over an item and make a larger image associated with that item appear and then dissappeaer on mouseoff
    //probably will need to set up a store for the item numbers and images with those numbers
    $('#thegridofdestiny').on('hover', '.item', function(){

    })

}


/* ***************get document ready*************** */
$(document).ready(function startPage() {
    // We call this function ONCE
    eventListeners();
    showPage();
    hideHeroExpand();
  })