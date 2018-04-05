
$("#listaDeEquipos").hide();

$(function(){

    // jQuery methods go here...
 
    
        $("#listarEquipos").click(function(){
            $("#carouselNews").hide();
           $.get("json/equipos.json",function(data){
               for(i=0;i<data.length;i++){
                $("#listaDeEquipos").append($("<li></li>").data[i].nombre);
               }

               $("#listaDeEquipos").show();
        });     
 });

       

});
