$(document).ready(function(){
  var timerOn = false;
  var sessionOn = true;
  var timeChanged = false;
  var min = 24;
  var sec = 60;
  var myVar = 0;

  //decrease break
  $("#break-minus").click(function(){
    if(!timerOn && $("#break-length").text() != "1"){
      timeChanged = true;
      $("#break-length").html($("#break-length").text() - 1);
    }
  });

  //increase break
  $("#break-plus").click(function(){
    if(!timerOn){
      timeChanged = true;
      $("#break-length").html(parseInt($("#break-length").text()) + 1);
    }
  });

  //decrease session
  $("#session-minus").click(function(){
    if(!timerOn && $("#session-length").text() != "1"){
      timeChanged = true;
      $("#session-length").html($("#session-length").text() - 1);
    }
  });

  //increase session
  $("#session-plus").click(function(){
    if(!timerOn){
      timeChanged = true;
      $("#session-length").html(parseInt($("#session-length").text()) + 1);
    }
  });

  $("#clock").click(function(){
    timerOn = !timerOn;

    if(timeChanged && sessionOn){
      min = parseInt($("#session-length").text());
      startClock();
    } else if(timeChanged && !sessionOn){
      min = parseInt($("#break-length").text());
      startClock();
    } else if(!timerOn){
      stopClock();
    } else{
      startClock();
    }
    timeChanged = false;
  });

  function myTimer() {
    sec--;
    if(sec <= 0){
      min--;
      sec = 59;
    }
    if(min < 0){
      sessionOn = !sessionOn;
      if(!sessionOn){
        min = parseInt($("#break-length").text()) -1;
        $("#mode").html("Break");
      } else {
        min = parseInt($("#session-length").text()) -1;
        $("#mode").html("Session");
      }
      sec = 59;
    }
    if(sec == 0){
      $("#time").html(String(min) + ":00");
    } else if( sec < 10){
      $("#time").html(String(min) + ":0" + String(sec));
    } else {
      $("#time").html(String(min) + ":" + String(sec));
    }
  }

  function startClock(){
    timerOn = true;
    if(timeChanged){
      min = min - 1;
      sec = 59;
    }

    $("#time").html(String(min) + ":" + String(sec));

    myVar = window.setInterval(myTimer, 1000);
  }

  function stopClock(){
    timerOn = false;
    window.clearInterval(myVar);
  }

});
