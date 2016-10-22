  $(document).ready(function(){
  	$(".button-collapse").sideNav();
   	$('.slider').slider({full_width: true});
	     // Pause slider
	$('.slider').slider('pause');
	// Start slider
	$('.slider').slider('start');
	// Next slide
	$('.slider').slider('next');
	// Previous slide
	$('.slider').slider('prev');
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    //Close Modal
    $('#modal1').closeModal();
    //mostrar productos
    $("#variedades").click(function(){
        $("#contenido-var").toggle();
    });
    $("#floracion").click(function(){
        $("#contenido-flor").toggle();
    });
    $("#portainjertos").click(function(){
        $("#contenido-inj, #cuadro-injertos").toggle();
    });
  });
