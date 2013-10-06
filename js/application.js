$(document).ready(function() {
 
 $('button').on('click', function() {
   
   var vacation = $(this).closest('vacation');
   var amount = vacation.data('price');
   var price = $('<p>From $'+amount+'</p>');
   vacaction.append(price);
   $(this).closest('.vacation').append(price);
   $(this).remove();
 });
});


















// price.appendTo($('.vacation'));


// .appendTo(<element>)
// .prependTo(<element>)
// .insertAfter(<element>)
// .insertBefore(<element>)

