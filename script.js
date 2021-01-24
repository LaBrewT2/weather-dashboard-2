$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({
              //API Call
              url:   'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=667a7ad2f064b0cc35a232f16bab9c8d",
              //url1: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&APPID=667a7ad2f064b0cc35a232f16bab9c8d",   
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                console.log(data);
              
                var widget  = show(data);
               // var cast = forecast(daily);

                $("#show").html(widget);
                //$("#forecast").html(cast);
                $("#city").val('');
              }
        })
    $.ajax({
      //API Call
      url1: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&APPID=667a7ad2f064b0cc35a232f16bab9c8d",   
      type: "GET",
      dataType: "jsonp",
      success: function(daily){
        console.log(daily);
        
        var cast = forecast(daily);
        
        $("#forecast").html(cast);
        $("#city").val('');
      }
})
}else{
$("#error").html('Field cannot be empty')
};
//API Data
function show(data){

  return "<h2>Current Weather for"+ data.name +"," + data.sys.country +"</h2>" +
  "<h3><strong>Weather </strong>:"+ data.weather[0].main +"</h3>"+
  "<h3><strong>Weather Description</strong>:"+ data.weather[0].description +"</h3>"+
  "<h3><strong>Temperature</strong>:"+ data.main.temp +"</h3>"+
  "<h3><strong>Temp High</strong>:"+ data.main.temp_max +"</h3>"+
  "<h3><strong>Temp Min</strong>:"+ data.main.temp_min +"</h3>"+
  "<h3><strong>Pressure</strong>:"+ data.main.pressure +"</h3>"+
  "<h3><strong>Humidity</strong>:"+ data.main.humidity + "</h3>"+
  "<h3><strong>Wind Speed</strong>:"+ data.wind.speed +"</h3>"+
  "<h3><strong>Wind Direction</strong>:"+ data.wind.deg +"</h3>"
}

// API Data
function forecast(daily){
  "<h4>Temp"+ daily.list.main.temp + "</h4>"+
  "<h4>Feels Like"+ daily.current.feels_like + "</h4>"
  "<h4>Description"+ daily.list.weather.description + "</h4>"
  "<h4>Min"+ daily.list.main.temp_min + "</h4>"
  "<h4>Max"+ daily.list.main.temp_max + "</h4>"
  }
})
})