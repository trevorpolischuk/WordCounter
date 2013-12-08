/*
Trevor's Word Counter.
*/

// Global variable :-(

var _wordCountRunningTotal = [];

(function( $ ) {

$('body').prepend('<h5 class="word-count-total">Page Word Count: <span class="count-total">COUNT HERE</span></h5>');

$(document).on('dblclick', function(e) {
    localCounter(e);
});

function localCounter(e) {
    e.preventDefault();
    var $clickedElement = $(e.target);
    if ($clickedElement.hasClass('counted') === true || $clickedElement.hasClass('item-word-count') === true)
    {
        console.log('This item has already been counted.');
    }
    else
    {
        $clickedElement.addClass('counted');
        var wordArray = $clickedElement.text().split(' ');
        _localCounter = wordArray.length;
        var convertToInt = parseInt(_localCounter,10);
        $clickedElement.append('<h6 class="item-word-count">Item Word Count: <span class="small-count">' + convertToInt + '</span></h6>' );
        _wordCountRunningTotal.push(convertToInt);
        updateTotal();
    }
}

function updateTotal() {
    //Reduce only works in latest browsers
    var _totalWordCount = _wordCountRunningTotal.reduce(function(ov, bv) { return ov + bv; }, 0);
    $('.count-total').text(_totalWordCount);
}

}( jQuery ));