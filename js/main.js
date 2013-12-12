/*
Trevor's Word Counter.
*/

// Global variable :-(

var _wordCountRunningTotal = [];

(function( $ ) {

$('body').prepend('<h5 class="word-count-total counted">Page Word Count: <span class="count-total counted">COUNT HERE</span></h5>');

$(document).on('dblclick', function(e) {
    localCounter(e);
});

function localCounter(e) {
    e.preventDefault();
    var $clickedElement = $(e.target);

    //what is fucked up here
    if ($clickedElement.hasClass('counted') === false)//|| $clickedElement.hasClass('item-word-count') === true
    {
        $clickedElement.addClass('counted');
        var wordArray = $clickedElement.text().split(' ');
        _localCounter = wordArray.length;
        var convertToInt = parseInt(_localCounter,10);
        $clickedElement.append('<h6 class="item-word-count counted">Item Word Count: <span class="small-count counted">' + convertToInt + '</span></h6>' );
        _wordCountRunningTotal.push(convertToInt);
        updateTotal();
    }
       // console.log($clickedElement.hasClass('item-word-count'));
}

function updateTotal() {
    //Reduce only works in latest browsers
    var _totalWordCount = _wordCountRunningTotal.reduce(function(ov, bv) { return ov + bv; }, 0);
    $('.count-total').text(_totalWordCount);
}

}( jQuery ));