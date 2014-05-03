test( "Checking if the total count is on the page", 1, function() {
    wordCountContainer = $('.word-count-total');
    ok( wordCountContainer.length, "Total count is not on the page!" );
});


test( "Checking the counting functionality", 4, function() {

    equal($('.count-total').text(), 0, 'The total count did not initialize at 0');

    $('body').append('<p class="test-para">Sample string that should return six.</p>');
    $('.test-para').trigger("dblclick");
    equal($('.count-total').text(), 6, 'The page total did not update correctly');

    $('body').append('<p class="test-para2">Sample string that should return six.</p>');
    $('.test-para2').trigger("dblclick");
    equal($('.count-total').text(), 12, 'The page total is probably not adding correctly');

    $('body').append('<p class="test-para3">Sample string that should return six.</p>');
    $('.test-para3').trigger("dblclick");
    equal($('.count-total').text(), 18, 'The page total is probably not adding correctly');

});