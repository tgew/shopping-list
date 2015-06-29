$(document).ready(function() {

// ADDING AN ITEM    
   
    $('#target').submit(function(event) {
        $('ul').append("<li><i class=\"fa fa-square-o\"></i>" + $('.add_new').val() + "</li>");
        statusUpdate($('li'));
        $('.add_new').val('');
        event.preventDefault();
    });
    
    
// CLICKING ON A CHECKBOX

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('checked'); 
        if ($(this).find('i').hasClass('fa fa-check-square-o')) {
            $(this).find('i').attr("class", "fa fa-square-o");
        } else {
            $(this).find('i').attr("class", "fa fa-check-square-o");
        }
    statusUpdate($('li'));
    });
    
// CLICKING ON REMOVE CHECKED ITEMS

    $('.remove').click(function() {
        $('li').each(function() {
            if ($(this).find('i').hasClass('fa fa-check-square-o')) {
            $(this).remove();
            }
        })
        statusUpdate($('li'));
    });
    
 
// UPDATE THE LIST STATS
    
    function statusUpdate(list_object) {
        var $list = $(list_object);
        var total = $list.length;
        
        var checked = 0;
        $list.each(function() {
            if ($(this).hasClass('checked')) {
                checked++;
                }
        });
        
        total = total-checked;
        
        $('.stats').text(checked + " items checked.  " + total + " items left to get.");
//        });
    }
    
});  // Document Ready closure
