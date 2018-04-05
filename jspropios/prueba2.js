var equiposAbierto=false;

$("#listaDeEquipos").hide();

$(function(){

    // jQuery methods go here...
 
    
        $("#listarEquipos").click(function(){
            $("#carouselNews").hide();
            if(!equiposAbierto){
           $.get("json/equipos.json",function(data){
               for(i=0;i<data.length;i++){
                $("#listaDeEquipos").append($("<tr></tr>").text(data[i].nombre));
               }

               
        });
        equiposAbierto=true;
    }
    $("#listaDeEquipos").show();     
 });

       

});


