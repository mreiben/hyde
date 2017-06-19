$(document).ready(function(){
  //variables
  var lastVal = 0;
  var total = 0;
  var currentVal = 0;
  var numReady = true;
  var opPicked = false;
  var opReady = false;
  var currentOp = "";
  var lastOp = "";
  var equalPressed = false;
  var pointPressed = false;
  
  //animate button clicks
  $(".clicker, .side-clicker, .clear-clicker").click(function(){
    $(this).css("background-color","#1C1D1C")
        .delay(100)
        .queue(function(){
          $(this).css("background-color", "#4C4C4C").dequeue()})
  });
  
  //functions to update the current total and history
  function updateTotal(){
    if(lastOp == "+"){
      $("#history").html(lastVal + "+" + currentVal)
      total = parseFloat(lastVal) + parseFloat(currentVal);
      lastVal = total;
      currentVal = total;
      $("#total").html(total.toString());
    }
    if(lastOp == "-"){
      $("#history").html(lastVal + "-" + currentVal)
      total = parseFloat(lastVal) - parseFloat(currentVal);
      lastVal = total;
      currentVal = total;
      $("#total").html(total.toString());
    }
    if(lastOp == "*"){
      $("#history").html(lastVal + "*" + currentVal)
      total = parseFloat(lastVal) * parseFloat(currentVal);
      lastVal = total;
      currentVal = total;
      $("#total").html(total.toString());
    }
    if(lastOp == "/"){
      $("#history").html(lastVal + "/" + currentVal)
      total = parseFloat(lastVal) / parseFloat(currentVal);
      lastVal = total;
      currentVal = total;
      $("#total").html(total.toString());
    }
  }
  
  //clear buttons
  $("#ac").click(function(){
    total = 0;
    lastVal = 0;
    $("#total").html(total);
    lastOp = "";
    $("#history").html("");
    currentVal = 0;
    currentOp = "";
    numReady = true;
    opPicked = false;
    equalPressed = false;
    pointPressed = false;
  });
  
  $("#ce").click(function(){
    currentVal = lastVal;
    $("#total").html(total);
    currentOp = "";
    opPicked = false;
    pointPressed = false;
  });
  
  $("#point").click(function(){
    if(!pointPressed){
      currentVal += ".";
      $("#total").text(currentVal);
      pointPressed = true;
    }
  });
  
  $(".num").click(function(){
    if(currentVal == 0 && !pointPressed){
      currentVal = "";
    }
    if(opPicked){
      lastVal = currentVal;
      opPicked = false;
      opReady = true;
      currentVal = "";
      $("#total").text(currentVal);
      currentVal += $(this).find('p').html();
      $("#total").text(currentVal);
    } else{
      currentVal += $(this).find('p').html();
      $("#total").text(currentVal);
    }
  });
  
  $(".op").click(function(){
    currentOp = $(this).find('p').html();
    if(opReady){
      updateTotal();
    }
    opReady = false;
    opPicked = true;
    pointPressed = false;
    lastOp = currentOp
  });
  
  //individual math operators
  $("#plus").click(function(){
    lastOp = "+";
  });
  $("#divide").click(function(){
    lastOp = "/";
  });
  $("#minus").click(function(){
    lastOp = "-";
  });
  $("#multiply").click(function(){
    lastOp = "*";
  });
  $("#equals").click(function(){
    updateTotal();
    lastOp = "";
  });
  
});
