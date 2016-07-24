$(document).ready(function(){
   list_alarm();
   current_time("#current");
   
   real_time_update();
});

function real_time_update(){
    setTimeout(function(){
         list_alarm();
         current_time("#current");
         
         real_time_update();
    },500);
}

function current_time(time_display_area){
   $(time_display_area).html('');
   $(time_display_area).append(new Date());
}

function list_alarm(){
    $.ajax({
        type: "GET",
        url:"alarm.json",
        dataType: "json",
        success: function(records){
            $("#alarm-list").html('');
            extract_key(records,"#alarm-list");
            
        },
        error: function() {
            alert("The json File could not be processed correctly.");
        }        
    });
}

function extract_key(records_in,show_location){
   $.each(records_in, function(key,value){
      if ( typeof value === 'object') {
         $(show_location).append( key + ':{ ' );
         extract_key(value,show_location);
      }else{
         $(show_location).append('' + key + ':' +  value +'<br />' );
      }
      
   });
}

function trigger_alarm(){
   
}