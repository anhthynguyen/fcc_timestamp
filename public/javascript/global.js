$(document).ready(function(){

  $("button").click(function(){
    var time = $("input[type='text']").val();
    var url = "/" + time;

    $.getJSON(url, function(json){
        $(".response").html(JSON.stringify(json));
    }).fail(function(json) {
        $(".response").html(JSON.stringify(json));
    });

  });

});
