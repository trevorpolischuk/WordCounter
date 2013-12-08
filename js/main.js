/*
Trevor's Word Counter.
*/

var runningTotal = new Array();

$('.navbar-brand').append('<h5 class="word-count-total">Page Word Count: <span class="count-total">COUNT HERE</span></h5>');

$(document).on('dblclick', function(e) {
    localCounter(e);
});

function localCounter(e) {
    var $clickedElement = $(e.target);
    if ($clickedElement.hasClass('counted') == true)
    {
        console.log ('This item has already been counted.')
    }
    else
    {
        $clickedElement.addClass('counted');
        var wordArray = $clickedElement.text().split(' ');
        _localCounter = wordArray.length;
        var convertToInt = parseInt(_localCounter,10);
        $clickedElement.append('<h6>Item Word Count: <span class="small-count">' + convertToInt + '</span></h6>' );
        runningTotal.push(convertToInt);
        updateTotal();
    }
}

function updateTotal() {
    //Reduce only works in latest browsers
    var _totalWordCount = runningTotal.reduce(function(ov, bv) { return ov + bv; }, 0);
    $('.count-total').text(_totalWordCount);
}