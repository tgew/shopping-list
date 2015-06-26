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
    $('list').click(function() {
//        this.addClass('checked');
        this.console.log('list clicked');
    });
    
//$('.list_item').click(function() {
//    $(
//    var clicked_html = $(this).html();
//    $(this).slideUp();
//    $('.stats').text(clicked_html);
//
//});    
    
//$('.list_item').click(function() {
//    var clicked_html = $(this).html();
//    $(this).slideUp();
//    $('.stats').text(clicked_html);
//
//});
    
// CLICKING ON REMOVE CHECKED ITEMS
// cycle through all .list_items 
//  if .list_item has fa-check-square-o then remove the .list_item
//
    
    
    
});