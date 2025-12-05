$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     
   // toggleGrid();

    // TODO 2 - Create Platforms

createPlatform(50, 200, 100, 60, "red")
 createPlatform(400, 250, 90, 15, "red")
 createPlatform(150, 300, 50, 15, "red")
  createPlatform(150, 450, 50, 15, "red")
  createPlatform(300, 0, 10, 250, "red")
createPlatform(470, 480, 30, 10, "red")
createPlatform(600, 430, 70, 10, "red")
createPlatform(690, 30, 01, 400, "red")
createPlatform(600, 300, 50, 10, "red")
createPlatform(310, 660, 50, 10, "red")
createPlatform(310, 660, 50, 10, "red")
createPlatform(450, 660, 3, 3, "red")
createPlatform(700, 660, 3, 3, "red")
createPlatform(800, 600, 9, 9, "red")
createPlatform(1000, 550, 200, 9, "red")

 createCollectable("max", 300, 100);
createCollectable("max", 700, 500);
 createCollectable("max", 300, 100);
createCollectable("grace", 1100, 400);

createCannon("right", 100, 2000)
createCannon("right", 750, 20)
createCannon("top", 550, 1900)
    
    // TODO 4 - Create Cannons

    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
