


test( "Checking if the total count is on the page", 1, function() {
    var quickTotal = $('.count-total').text();
    equal( quickTotal, "COUNT HERE", "Total count is not on the page!" );
});

test( "Testing if the class has been added", 1, function() {

    //Doesnt Work Yet
    var $paragraph = $( '.test-para' );
    $paragraph.on( "dblclick", function(e) {

        var classCheck = $('.test-para').hasClass('counted');

        console.log(classCheck);

        ok( classCheck, true, "The class has not been added to the element")

    });
    $paragraph.trigger( "dblclick" );
});
