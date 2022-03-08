$(function() {	
	$("#frm").find("input,textarea,select").not("[type=submit]").jqBootstrapValidation({
	    preventSubmit: true,
	    submitError: function ($form, event, errors) {
	        // Here I do nothing, but you could do something like display 
	        // the error messages to the user, log, etc.
	    },
	    submitSuccess: function ($form, event) {
	        $.post( 
				"index.php",
				{ action:1, nombre: $("#txtNombre").val(), email: $("#txtEmail").val(), mensaje: $("#txtMensaje").val()  },
				function(data) { 
					if(data.status=='OK'){
						event.preventDefault(); 
						$form.append("<div id='form-alert'><div class='alert success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+data.message+"</strong></div></div>");
						$("#frm")[0].reset();
					}else{
						event.preventDefault();
						$form.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+data.message+"</strong></div></div>");
				} },"json")
				.fail(function(){alert('No fue posible registrar al usuario (1)');
			}); 
	        event.preventDefault();  
	    },
	    filter: function () {
	        return $(this).is(":visible");
	    }
	});
	
});




$(document).ready(function(){
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *	Acciones de los botones inscribete		
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$("#btnEnviar").click(function(){
		$("#frm").submit();
	});
});