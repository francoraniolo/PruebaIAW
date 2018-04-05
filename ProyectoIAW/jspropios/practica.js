


$("#listaDeEquipos").hide();

$(function(){

    // jQuery methods go here...
      
    
        $("#listarEquipos").click(function(){
            $("#carouselNews").hide();
            var equipos=JSON.parse($.getJSON({'url': "../json/equipos.json", 'async': false}).responseText);
            var equipos=JSON.parse($.getJSON({'url': "../json/equipos.json", 'async': false}).responseText);
            $.alert(equipos[0].nombre);
         
        });
            

 });

