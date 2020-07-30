var ball;
var database;
var Position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    var ballpos = database.ref('Ball/Position');
    ballpos.on("value", readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
 Position = data.val();
 ball.x = Position.x;
 ball.y = Position.y;
}

function writePosition(x,y){
database.ref('Ball/Position').set({
    'x': Position.x + x,
    'y': Position.y + y
});

}