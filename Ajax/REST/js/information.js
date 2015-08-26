
function getInformationByGroup(){
  event.preventDefault();
  var grupo = $("#groupid")[0].value;
  $.ajax({
     type: "GET",
     dataType: 'JSON',
     url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
     success: function(data){
       var html = "";
       for (var i = 0; i < data.information.length; i++) {
         html += "Id: " + data.information[i]['_id'] + "</br>";
         html += "Grupo: " + data.information[i]['group'] + "</br>";
         html += "Informacion: " + data.information[i]['thing'] + "</br>";
         html += "--------------------- </br>";
       }
       $("#infoGroup").html(html);
     }
  });
}

function getInformationByItem(){
  event.preventDefault();
  var item = $("#itemid")[0].value;
  $.ajax({
     type: "GET",
     dataType: 'JSON',
     url: "http://web-unicen.herokuapp.com/api/get/" + item,
     success: function(data){
       var html = "";
       html += "Id: " + data.information['_id'] + "</br>";
       html += "Grupo: " + data.information['group'] + "</br>";
       html += "Informacion: " + data.information['thing'] + "</br>";
       html += "--------------------- </br>";
       $("#infoItem").html(html);
     },
     error:function(data){
       console.log(data);
     }

  });
}

function guardarInformacion(){
  event.preventDefault();
  var grupo = $("#grupo")[0].value;
  var informacion = $("#informacion")[0].value;
  var info = {
      "group": grupo,
      "thing": informacion
      };

  if (grupo && informacion){
    $.ajax({
       type: "POST",
       dataType: 'JSON',
       data: JSON.stringify(info),
       contentType: "application/json; charset=utf-8",
       url: "http://web-unicen.herokuapp.com/api/create",
       success: function(data){
         $("#guardarAlert").removeClass("alert-danger")
         $("#guardarAlert").addClass("alert-success")
         $("#guardarAlert").html("Informacion guardada con ID=" + data.information._id);
         console.log(data);
       },
       error:function(data){
         $("#guardarAlert").addClass("alert-danger")
         $("#guardarAlert").html("Error por favor intente mas tarde");
         console.log(data);
       }
    });
  }
  else
  {
    $("#guardarAlert").addClass("alert-danger")
    $("#guardarAlert").html("Grupo e Informacion son campos requeridos");
  }
}
