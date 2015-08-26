$(document).ready(function(){
    // código de inicialización de eventos
    function MostrarContenido(data) {
      alert("ok");
      $("#ajaxContent").html(data);
    }
    function MostrarError(jqXHR, textStatus, errorThrown) {
      alert("bad");
      alert("bad");
      alert("bad");
      alert("bad");

      $("#ajaxContent").html("SE CAYO LA RED.");
    }

    function CargarAjax() {
      // body...
      $.ajax(
        {
          type:"GET",
          url:"http://web-unicen.herokuapp.com/api/html?",
          success: MostrarContenido,
          dataType: "html",
          error: MostrarError
        }
      );
      $("#ajaxContent").html("Cargando...");
    }
    $("#btnCargar").on("click", CargarAjax);
});
