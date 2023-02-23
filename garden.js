img = "";

function back()
{
    window.location="index.html";
}


function preload()
{
    img = loadImage('b1-image.png');
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelloaded);
}


function draw()
{
    image(img, 0, 0, 640, 420);

    fill("red");
    text("Ball", 72, 312);
    noFill();
    stroke("red");
    rect(70, 300, 90, 90);

 
    fill("red");
    text("Person", 125, 69);
    noFill();
    stroke("red");
    rect(120, 60, 120, 300);
    
    fill("red");
    text("Person", 190, 49);
    noFill();
    stroke("red");
    rect(180, 40, 120, 330);
  

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







