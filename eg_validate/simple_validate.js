$(document).ready(function(){
    $("#div_error>p").hide()
    
    var simple_error_message   ;
    simple_error_message = ''  ;
    
    $("#lastname").change(function(){
        simple_error_message = $("#lastname").val();
        //simple_error_message = "a";
        //$(error_box).text(simple_error_message);
        $(validate_text.error_display ).text(simple_error_message);
        
        $("#div_error>p").show();
        
        
    });
});
