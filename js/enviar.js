$(document).ready(function(){
	$("#formContacto").submit(function( event ) {
		$.ajax({
			type: 'post',
			url: 'contacto.php',
			data: $(this).serialize(),
			success: function(response){
				if (response == 'success') {
					$('#formContacto')[0].reset();
					Materialize.toast('Mensaje enviado con exito', 4000,'rounded success');
				}else{
					Materialize.toast('error', 4000,'rounded error');
				}
			}
		});
		return false;
	})
});