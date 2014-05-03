
//Protecting the use of $
(function ( $ ) {

    //Extending jQuery with our own function

    $.fn.wordCounter = function() {

        var totalCount = 0;
        var localCountHTML ='<h6 class="item-word-count counted">Current Element Count: <span class="small-count counted"></span></h6>';
        var pageWordCount = '<h5 class="word-count-total counted"> Page Word Count: <span class="count-total counted">0</span><\/h5>';

        //TODO: Move this to an initializer
        //Bind the double click event to our counter
        $(document).on('dblclick', function(e) {
            localCounter(e);
        });
        $('body').prepend(pageWordCount);

        //Our Counter
        function localCounter(e) {
            e.preventDefault();
            var $clickedElement = $(e.target);
            //If the element hasn't been clicked
            if ($clickedElement.hasClass('counted') === false)
            {
                //Add the counted class
                $clickedElement.addClass('counted');
                var wordArray = $clickedElement.text().split(' ');
                _localCounter = wordArray.length;
                var elemWordCount = parseInt(_localCounter,10);
                totalCount = totalCount + elemWordCount;
                $clickedElement.append(localCountHTML);
                $clickedElement.find('.small-count').html(elemWordCount);
                $('.count-total').text(totalCount);
            }

        }
    };

}( jQuery ));

$(document).wordCounter();