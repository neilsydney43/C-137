img = "";

function back()
{
    window.location="index.html";
}


function preload()
{
    img = loadImage('b5-image.png');
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}


function draw()
{
    image(img, 0, 0, 640, 420);
    
    fill("red");
    text("Person", 285, 55);
    noFill();
    stroke("red");
    rect(280, 40, 120, 380);
  

}

function modelloaded()
    {
        console.log('modelloaded');
        objectDetector.detect(img, gotresults);
    }

function gotresults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}







