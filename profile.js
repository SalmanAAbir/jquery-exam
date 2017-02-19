$(document).ready(function(){

$('#tr').click(function(){
		$("div").filter(".im").show(1000);
		$("div").filter(".fu").hide(1000);
		
	});

	$('#na').click(function(){
		$("div").filter(".im").show(1000);

		$("div").filter(".de").hide(1000);
	});
	$('#all').click(function(){
		$("div").filter(".im").show(1000);
	});




// counter



	$("#te").keyup(function(){
		var n = $("#te").val().length;
		n=160-n;
		$("#cnt").text(n);
		if ( n < 0) {
    	
    	 $("#cnt").css("color", "red");
	} 

	else {

    	 $("#cnt").css("color", "green");
		}
	});

	$('#cbg').click(function(){

		if($(".main").hasClass("bg3")){
		$('.main').removeClass("bg3");

		$('.main').addClass("bg1");


		$('.main').addClass("bg2");

		}else if($(".main").hasClass("bg2")){
		$('.main').removeClass("bg2");

		$('.main').addClass("bg1");

		}


		else{
		$('.main').addClass("bg3");

		}
		
	});
	$("#date").datepicker();



});