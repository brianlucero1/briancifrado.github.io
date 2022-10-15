$(document).ready(function(){

   $('.menu a').each(function(index){
     $(this).css({
        'top': '-200px'
     });
     $(this).animate ({
         top: '0'
     }, 200 + (index * 500));
   });

   if($(window).width() > 800 ){
      $('header .textos').css({
          opacity:0,
          marginTop:0
      });
      $('header .textos').animate({
        opacity:1,
        marginTop: '-52px'
    },1500);  
   }






   ////ACERCA DE////
   var acercaDe = $('#acerca-de').offset().top,
       menu = $('#platillos').offset().top,
       galeria = $('#galeria').offset().top,
       ubicacion = $('#ubicacion').offset().top;


      $('#btn-acerca-de').on('click', function(){
          $('html, body').animate({
           scrollTop: acercaDe -300
          }, 1000);
      });

      $('#btn-menu').on('click', function(){
        $('html, body').animate({
         scrollTop: menu
        }, 1500);
    });

    $('#btn-galeria').on('click', function(){
        $('html, body').animate({
         scrollTop: galeria
        }, 2000);
    });

    $('#btn-ubicacion').on('click', function(){
        $('html, body').animate({
         scrollTop: ubicacion
        }, 2500);
    });








});