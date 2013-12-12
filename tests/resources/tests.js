test( "Checking if the total count is on the page", 1, function() {
    var quickTotal = $('.count-total').text();
    equal( quickTotal, "COUNT HERE", "Total count is not on the page!" );
});

test( "Testing if the class has been added and the total value is being summed", 2, function() {
    var $paragraph = $( '.test-para' );
    $paragraph.trigger( "dblclick" );
    var classCheck = $('.test-para').hasClass('counted');
    var findTotal = $('.count-total').text();
    equal( 39, findTotal, "The total is not being summed together correctly" );
    ok( classCheck, true, "The class has not been added to the element");
});


test( "Testing if the _wordCountRunningTotalArray is being increased", 1, function() {
    var preTotal = _wordCountRunningTotal.length;
    $('.test-heading').trigger( "dblclick" );
    var postTotal = _wordCountRunningTotal.length;
    ok(preTotal < postTotal, "Check that the array is being .pushed() correctly");
});