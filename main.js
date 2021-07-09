canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image = "mars.jpg";
rover_image = "rover.png";

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

function add(){
    background_image_tag = new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;


    rovar_image_tag = new Image();
    rovar_image_tag.onload=uploadRover;
    rovar_image_tag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
    
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keycode;
    console.log(keypress);
    if(keypress == '38'){
    up();
    console.log("up");
    }
    if(keypress == '40'){
        down();
        console.log("down");
        }
        if(keypress == '37'){
            left();
            console.log("left");
            }
            if(keypress == '39'){
                right();
                console.log("right");
                }    
}

