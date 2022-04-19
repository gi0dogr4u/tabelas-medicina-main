function getLines(saida) {
    var html ='';
    for (var i in saida.collection) {
                html += "<tr>" +
                          "<td>" + saida.collection[i].paciente_id + "</td>" + 
                          "<td>" + saida.collection[i].data_incio_tratamento + "</td>" + 
                          "<td>" + saida.collection[i].observacoes+ "</td>" + 
                        "</tr>";
    }
 return html;
}

function getHeader() {
    var html = "<tr>" +
                 "<td>ID</td>" + 
                 "<td>Data Tratamento</td>" + 
                 "<td>Obs</td>" + 
                "</tr>";
 return html;
}
/* 
function getTable(saida) {
    if (saida.status == 1) {
        var tabela = ["<table width=\"100%\">",
                      getHeader(),
                      getLines(saida),
                     "</table>"].join("");
       $('#panel-2').html(tabela);
    }
}

$.ajax({ 
         url: formURL,
         type: 'POST',
         data: formData,
         mimeType: "multipart/form-data",
         contentType: false,
         cache: false,
         processData: false,
         success: function(data, textStatus, jqXHR) {
                  $("#multi-msg").html('<pre><code>' + data + '</code></pre>'); 
                  //console.log(data);
                  getTable(jQuery.parseJSON(data));           
                  },
         error: function(jqXHR, textStatus, errorThrown) {
                    $("#multi-msg").html('<pre><code class="prettyprint">' +
                                         'AJAX Request Failed' +
                                         '<br/> textStatus=' +
                                         textStatus +
                                         ', errorThrown=' +
                                            errorThrown +
                                         '</code></pre>');
                }
}); */