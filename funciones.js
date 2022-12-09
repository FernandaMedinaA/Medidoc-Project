// $("#menu").click(function () {
//   $("#contenedormenu").slideToggle();
// });

// Funcion para el menu responsive
$("#menu").click(function () {
    $("#contenedormenu").toggleClass("abrirmenu");
  });
  
  // Funcion para desplazamiento de los vinculos
  $(".btn_ancla").click(function () {
    var ancla = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(ancla).offset().top,
      },
      1000
    );
    $("#contenedormenu").toggleClass("abrirmenu");
  });
  
  // Funcion para el boton subir
  $(document).ready(function () {
    $("#subir").click(function () {
      $("html,body").animate(
        {
          scrollTop: "0px",
        },
        1000
      );
    });
  });

  //wow.min.js
  new WOW().init();

  //slide con flechas
  $(function () {
    $("#slider3").responsiveSlides({
      auto: false,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });
  });
  //slide automatico
  $(function() {
    $(".rslides").responsiveSlides();
  });
  //acordeon
  $(".titulo1").click(function(){
    $(".contenido1").slideToggle();
    $(".icono1").toggleClass("rotar");
  });

  $(".titulo2").click(function(){
    $(".contenido2").slideToggle();
    $(".icono2").toggleClass("rotar");
  });

  $(".titulo3").click(function(){
    $(".contenido3").slideToggle();
    $(".icono3").toggleClass("rotar");
  });
  //acordeon
  $(".acordeon1").click(function () {
    $(".contenido1").slideToggle();
    $(".mas1").toggleClass("desaparecer");
});
$(".acordeon2").click(function () {
    $(".contenido2").slideToggle();
    $(".mas2").toggleClass("desaparecer");
});
$(".acordeon3").click(function () {
    $(".contenido3").slideToggle();
    $(".mas3").toggleClass("desaparecer");
});
$(".acordeon4").click(function () {
    $(".contenido4").slideToggle();
    $(".mas4").toggleClass("desaparecer");
});

//Modal
  var transparencia = document.getElementById("modal");
  var abrir = document.getElementById("btn");
  var cerrar = document.getElementById("cerrarbtn");

  function tiempo(){
      transparencia.style.display = "block";
  }
  abrir.onclick = function(){
      transparencia.style.display = "block";
  };
  cerrar.onclick = function(){
      transparencia.style.display = "none";
  };
  window.onclick = function (event){
      if(event.target == transparencia){
      transparencia.style.display = "none";
  }
  };
  var transparencia1 = document.getElementById("modal1");
  var abrir1 = document.getElementById("btn1");
  var cerrar1 = document.getElementById("cerrarbtn1");

  function tiempo(){
      transparencia1.style.display = "block";
  }
  abrir1.onclick = function(){
      transparencia1.style.display = "block";
  };
  cerrar1.onclick = function(){
      transparencia1.style.display = "none";
  };
  window.onclick = function (event){
      if(event.target == transparencia1){
      transparencia1.style.display = "none";
  }
  };
  var transparencia2 = document.getElementById("modal2");
  var abrir2 = document.getElementById("btn2");
  var cerrar2 = document.getElementById("cerrarbtn2");

  function tiempo(){
      transparencia2.style.display = "block";
  }
  abrir2.onclick = function(){
      transparencia2.style.display = "block";
  };
  cerrar2.onclick = function(){
      transparencia2.style.display = "none";
  };
  window.onclick = function (event){
      if(event.target == transparencia2){
      transparencia2.style.display = "none";
  }
  };