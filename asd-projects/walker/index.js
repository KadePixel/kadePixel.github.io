/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  // Game Item Objects
  var walker = {
    cordinateX: 0,
    cordinateY: 0,
    speedX: 0,
    speedY: 0,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      walker.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
    if (event / which === KEY.LEFT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
  }

  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedX = -5;
    }
    if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedY = -5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedY = 5;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameitem(newFrame) {
    walker.cordinateX = walker.cordinateX + walker.speedX;
    walker.cordinateY = walker.cordinateY + walker.speedY;
  }

  function redrawGameItem(newFrame) {
    $("#walker").css("left", walker.cordinateX);
    $("#walker").css("top", walker.cordinateY);
  }
  function wallCollision() {
    const bottomSide = "#board".height() - $("#walker").height();
    const rightSide = "#board".width() - $("#walker").width();

    if (walker.cordinateX < 0) {
      walker.cordinateX = 0;
    }

    if (walker.cordinateY < 0) {
      walker.cordinateY - 0;
    }

    if (walker.cordinateX > rightSdie) {
      walker.cordinateX = rightSide;
    }

    if (walker.cordinateY > bottomSide) {
      walker.cordinateY = bottomSide;
    }
  }
}
