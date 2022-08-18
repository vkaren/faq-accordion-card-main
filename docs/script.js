$(document).ready(function() {
   $('button').on('click', onButtonClick)

   function onButtonClick(e){
   const className = e.target.nextElementSibling.className;
   const p = $('.'+className);
   
   $('p').removeClass('visible')
   $('button').removeClass('bold rotate');
   $('li').removeClass('click')

  if(p.length > 0){
    $('li').addClass('click')
    p.parent().removeClass('click')
    p.addClass('visible')
    e.target.className = 'bold rotate';
  }

   }
});