$(document).ready(function(){

  var strictOn = false;
  var gameOn = false;
  var playerTurn = false;
  var sequence = [];
  var playerChoice;
  var checkPos = 0;
  var seqLen = 0;


  //button click events
  $("#strict_button").click(function(){
    if(strictOn){
      $(this).css("background-color","yellow");
      strictOn = false;
    } else {
      strictOn = true;
      $(this).css("background-color","#806E15")
    }
  });

  $(".choice").click(function(){
    setTimeout(function(){
      if(playerTurn){
        console.log("Player choice: " + playerChoice);
        if (strictOn && playerChoice != sequence[checkPos]){
            console.log("wrong answer");
            $(".choice").css("opacity","1.0");
            setTimeout(function(){
              restartGame();
            },500);
        } else if(playerChoice != sequence[checkPos]){
          console.log("Incorrect guess");
          $("#round").html(0 + (checkPos + 1));
          $(".choice").css("opacity","1.0");
            setTimeout(function(){
              $(".choice").css("opacity","0.7");
            },500);
            setTimeout(function(){
              flashSeq();
            },1000);
            checkPos = 0;
        } else {
          checkPos++;
        }
        if(checkPos == sequence.length){
          if(checkPos < 9){
            $("#round").html("0" + String(checkPos + 1));
          } else if (checkPos >= 9){
            $("#round").html(String(checkPos + 1));
          } else if (checkPos >= 19){
            $("#round").html(String(checkPos+1));
            sequence = [0,1,2,3,3,2,1,0];
            flashSeq();
          }
          setTimeout(function(){
            sequence.push(pickRandom());
            checkPos = 0;
            flashSeq();
          },1000);
        }
      }
    },500);
  });

  $("#green").click(function(){
      if(playerTurn){
        playerChoice = 0;
        flashColor(0);
      }
  });

  $("#red").click(function(){
      if(playerTurn){
        playerChoice = 1;
        flashColor(1);
      }
  });

  $("#yellow").click(function(){
      if(playerTurn){
        playerChoice = 2;
        flashColor(2);
      }
  });

  $("#blue").click(function(){
      if(playerTurn){
        playerChoice = 3;
        flashColor(3);
      }
  });

  function pickRandom(){
    return Math.floor(Math.random()*4);
  }

  $("#start_button").click(function(){
    if(gameOn){
      restartGame();
    } else {
      console.log("Starting game...")
      console.log("Strict mode: " + strictOn);
      $("#round").html("01");
      gameOn = true;
      playerTurn = false;
      setTimeout(function(){
        compTurn();
      }, 2000);
    }
  });

  function flashColor(i){
    var c = "";
    var sound = "";
    if(i==0){
      c = "#green";
      sound = "sound0";
    }
    else if(i==1){
      c = "#red";
      sound = "sound1";
    }
    else if(i==2){
      c = "#yellow";
      sound = "sound2";
    }
    else {
      c = "#blue";
      sound = "sound3";
    }

    $(c).css("opacity","1.0");
    document.getElementById(sound).play();
    setTimeout(function(){
      $(c).css("opacity","0.7");}, 500);
  };

  function flashSeq(){
    console.log("Current Sequence:" + sequence);
    for (let k = 0; k < sequence.length; k++){
        setTimeout(function(){
          flashColor(sequence[k]);
          console.log("S: " + sequence[k]);
        }, 1000*k);
      };
  };

  function compTurn(){
    sequence.push(pickRandom());
    seqLen++;
    console.log("Current Sequence: ")
    console.log(sequence);
    flashSeq();
    playerTurn = true;
    console.log("player turn: " + playerTurn);
  }

  function restartGame(){
    console.log("Restarting game...");
    strictOn = false;
    gameOn = false;
    console.log("press start");
    playerTurn = true;
    sequence = [];
    $("#strict_button").css("background-color","yellow");

    $(".choice").css("opacity","1.0").delay().css("opacity","0.7");
    $("#round").html("--");
  }

});
