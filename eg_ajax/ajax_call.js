$(document).ready(function(){
   real_time_update();
});

function real_time_update(){
    setTimeout(function(){
         list_friends();
         list_json();
         list_mysql();
         real_time_update();
    },2000);
}

function list_friends(){
    $.ajax({
        type: "GET",
        url: "temp.xml",
        dataType: "xml",
        success: function(records){
            $("ul").children().remove();
            $(records).find("friend").each(function(){
                var record = '<li>Name : '+ $(this).find("name").text() + '</li>';
                $("ul").append(record);
            });              
        },
        error: function() {
            alert("The XML File could not be processed correctly.");
        }        
    });
}

function list_json(){
    $.ajax({
        type: "GET",
        url:"menu_item.json",
        dataType: "json",
        success: function(records){
            $("#json-div").children().remove();
            
            $.each(records, function(key,value){
               $("#json-div").append('<p>name : ' + value.name + ', age : ' +  value.age +'</p>' );
               });
        },
        error: function() {
            alert("The json File could not be processed correctly.");
        }        
    });
}

function list_mysql(){
    $.ajax({                                      
      url: 'ajax.php',                  //the script to call to get data          
      data: "",                        //you can insert url argumnets here to pass to api.php
                                       //for example "id=5&parent=6"
      dataType: 'json',                //data format      
      success: function(records)          //on recieve of reply
      {
        //--------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------
            $("#output-div").children().remove();
            
//            $("#output-div").append('<p>records:' + records + '</p>');
            $.each(records, function(key,value){
               $("#output-div").append('<p>code: '+value[0]+value[1]+value[4]+value[2] +',name: '+value[5] + '</p>' );
               });
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
      },
      error: function(){
         alert("either the database not ready or the php code can not supply the data request.");
      }
    });
}