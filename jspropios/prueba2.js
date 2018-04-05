
$("#listaDeEquipos").hide();

$(function(){

    // jQuery methods go here...
 
    
        $("#listarEquipos").click(function(){
            $("#carouselNews").hide();
            $.get("json/equipos.json",function(data){
                alert(data[0].nombre);
        });
            

 });


});
