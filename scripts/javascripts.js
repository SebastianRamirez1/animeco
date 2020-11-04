//CODIGO DEL CAROUSEL
var cont=0;
var xx;
function loopSlider(){
    xx = setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-purple-800");
            $("#sButton2").addClass("bg-purple-800");
            cont=1;
        
        break;
        }
        case 1:
        {
        
            $("#slider-2").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton1").addClass("bg-purple-800");
            cont=0;
        
        break;
        }
        
        
        }},8000);

}

function reinitLoop(time){
    clearInterval(xx);
    setTimeout(loopSlider(),time);
}



function sliderButton1(){

    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=0
    
}
    
function sliderButton2(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=1
    
}
//FIN CODIGO CAROUSEL


$("document").ready(function(){//Cargar pagina
    var boton_navbar = $("#boton_navbar");
    var menu = $(".menu-principal");
    var tamaño = $(window).width();

    boton_navbar.click(function(){//evento para el menu responsive
        if(menu.hasClass("hidden")){
            menu.fadeIn('slow');
            menu.removeClass("hidden");
        } else{
            menu.fadeOut('slow');
            menu.addClass("hidden");
        }
    });

    //jQuery de carrousel
    $("#slider-2").hide();
    $("#sButton1").addClass("bg-purple-800");
    loopSlider();

    //tooltip para el footer
    $(document).tooltip();

    //JS para acordion
    var myRadios = document.getElementsByName('tabs2');
    var setCheck;
    var x = 0;
    for(x = 0; x < myRadios.length; x++){
        myRadios[x].onclick = function(){
            if(setCheck != this){
                setCheck = this;
            }else{
                this.checked = false;
                setCheck = null;
        }
        };
    }

});