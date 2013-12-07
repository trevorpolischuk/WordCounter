/*
Trevor's Word Counter.
*/


//make this a global array instead of just a variable, add to it, then reduce
var runningTotal = 0;

$(document).on('dblclick', function(e) {

    var $clickedElement = $(e.target);
    var wordArray = $clickedElement.text().split(' ');
    _localCounter = wordArray.length;

    var convertToInt = parseInt(_localCounter,10);

    var runningTotal = convertToInt + _localCounter;




    console.log(runningTotal);
});




$('p').each(function ( index ) {
	var wordArray = $( this ).html().split(' ');
	var _count = wordArray.length;
	$(this).append('<h6>Item Word Count: <span class="small-count">' + _count + '</span></h6>' );
});





$('.block h1').each(function ( index ) {
	var wordArray = $( this ).html().split(' ');
	var _count = wordArray.length;
	$(this).append('<h6>Item Word Count: <span class="small-count">' + _count + '</span></h6>' );
});

$('.block').each(function ( index ) {

	var _totalArray = new Array;

	$(this).find('.small-count').each(function ( index ) {
		_totalArray[index] = $(this).html().split(' ');
	});

	var _toInt = _totalArray.map(function (x) {
		return parseInt(x, 10);
	});

	var _sum = _toInt.reduce(function(pv, cv) { return pv + cv; }, 0);
	$(this).before('<h2 style="font-size:25px;position:absolute;z-index:9999;margin-top:15px;margin-left:10px;border: 1px solid black;background:white;padding:7px;">Block Word Count: <span class="block-total">' + _sum + '</span></h2>');
});

var _totalSum = new Array;

$('.block-total').each( function ( index )  {
	_totalSum[index] = $(this).html().split(' ');
});

var _totalInt = _totalSum.map(function (x) {
	return parseInt(x, 10);
});

var _totalWordCount = _totalInt.reduce(function(ov, bv) { return ov + bv; }, 0);

$('.navbar-brand').append('<h5 style="color:white;font-size:25px;background:black;padding:7px;display:inline;position:relative;left:284px;top:-32px;">Page Word Count: ' + _totalWordCount + '</h5>');
