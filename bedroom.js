img = "";

function back()
{
    window.location="index.html";
}


function preload()
{
    img = loadImage('b3-image.png');
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

    fill("blue");
    text("Bed", 122, 185);
    noFill();
    stroke("blue");
    rect(120, 166, 455, 203);
    
    fill("blue");
    text("Frames", 105, 135);
    noFill();
    stroke("blue");
    rect(90, 120, 190, 100);

    fill("blue");
    text("Lamp", 280,70);
    noFill();
    stroke("blue");
    rect(268, 55, 100, 100);
   
    fill("blue");
    text("Window", 525, 70);
    noFill();
    stroke("blue");
    rect(522, 55, 100, 225);

    fill("blue");
    text("Hanging Pot", 10, 65);
    noFill();
    stroke("blue");
    rect(7, 50, 80, 185);

   
    

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


