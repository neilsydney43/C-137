img = "";

function back()
{
    window.location="index.html";
}


function preload()
{
    img = loadImage('b4-image.png');
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
    text("Chair", 120, 215);
    noFill();
    stroke("red");
    rect(110, 200, 140, 210);
  

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







