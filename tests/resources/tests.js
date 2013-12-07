test( "hello test", function() {
    ok( 1 == "1", "Passed!" );
});


test( "A test with one assertions", 1, function() {

    var wordPickerReturn = wordPicker();
    ok( wordPickerReturn, "What does this return" );
    console.log(wordPicker());

});


test( "Testing whether an element has been clicked", 1, function() {


    var $body = $( "body" );
    $body.on( "click", function() {
        ok( true, "body was clicked!" );
    });
    $body.trigger( "click" );

});