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
     
    //toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(600, 610, 100, 15, "purple")
createPlatform(950, 500, 100, 15, "red")
createPlatform(700, 400, 10, 15, "green")
createPlatform(700, 300, 10, 15, "green")
createPlatform(500, 300, 5, 5, "white")
createPlatform(400, 560,5,250,"Purple")
createPlatform(400, 300, 10, 5, "white")
createPlatform(300, 180, 10,10, "red")
createPlatform(400, 300, 5, 5, "white")
createPlatform(50, 700, 400, 5, "red")
    // TODO 3 - Create Collectables
createCollectable("steve", 300, 400);
createCollectable("grace", 300, 000);
createCollectable("diamond", 800, 150);

    
    // TODO 4 - Create Cannons
createCannon("top", 300,2355);
createCannon("top", 525,2355);
createCannon("bottom",1000, 0);
createCannon("left", 660, 000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
