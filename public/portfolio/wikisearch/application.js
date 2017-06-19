$(document).ready(function(){
  var searchClicked = false;

  function moveElements(){
    if(searchClicked){
      $("#mainView").animate({"margin-top":"200px"},500);
      $("button").html("Search");
      $("input").val("");
      $("#searchResults").fadeOut();
      searchClicked = false;
    }
    else{
      $("#mainView").animate({"margin-top":"20px"},500);
      $("button").html("Clear");
      $("#searchResults").fadeIn();
      searchClicked = true;
    }
  }

  function runSearch(){
    //clear old searches
    $("#searchResults").html("");
    //run api request and fill results
    var searchTerm = $("input").val().replace(" ","%");
    var URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&limit=8&namespace=0&format=json";

    $.ajaxSetup({
  		cache: false
  	});

    $.ajax({
      cache: false,
      type: 'GET',
      dataType: 'jsonp',
      url: URL,
      success: function(data){
        var resultTitles = data[1];
        var resultDescriptions = data[2];
        var resultURLS = data[3];

        for(var x = 0; x < data[1].length; x++){
          if(resultDescriptions[x] === "undefined"){
            break;
          }
          else{
            $("#searchResults").append("<a href='"+resultURLS[x]+"'<div class='col-xs-6 col-xs-offset-3 text-center result'><h3 class='resultTitle'>"+resultTitles[x]+"</h3><h3 class='resultText'>"+resultDescriptions[x]+"</h3></div></a>");
          }
        }
      }
    });
  }

  $("button").click(function(){
    if($("input").val() != ""){
      moveElements();
      runSearch();
    }
  });

  $('input').on('keypress', function (e) {
    if(e.which === 13){
      if(!searchClicked){
        moveElements();
        runSearch();
      }
      else{
        runSearch();
      }
    }
  });
});
