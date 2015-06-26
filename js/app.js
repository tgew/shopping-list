$(document).ready(function() {

// ADDING AN ITEM    
// when click on .add_new
//  make the div editable
// when click on #add_button
//  create a new .list_item with html text set to .add_new html text
    
// CLICKING ON A CHECKBOX
// when click on .i
//  if fa-square-o (unchecked)
//      replace #item# fa-square-o with fa-check-square-o
//      change text decoration to line through on #item#
//  if fa-check-square-o
//      check it
//      remove the line through
//  update the .stats
    
//  var $wrapper = $('#wrapper');
    $('li').click(function() {
        $(this).toggleClass('checked'); 
        if ($(this).find('i').hasClass('fa fa-check-square-o')) {
            $(this).find('i').attr("class", "fa fa-square-o");
        } else {
            $(this).find('i').attr("class", "fa fa-check-square-o");
        }
        
//        console.log(this);
    });

    
// CLICKING ON REMOVE CHECKED ITEMS
// cycle through all .list_items 
//  if .list_item has fa-check-square-o then remove the .list_item
//
    $('.remove').click(function() {
        $('li').each(function() {
            if ($(this).find('i').hasClass('fa fa-check-square-o')) {
            $(this).remove();
            }
        })
    });
    
    
    function statusUpdate() {
        var $list = $(this);
        var total = $this.length;
        var checked = 0;
        $this.each(function() {
            if ($this.hasClass('checked')) {
                checked++;
                }
        });
        
    }
    
});
