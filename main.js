var canvas= new fabric.Canvas ('myCanvas')

block_img_width = 30;
block_img_height = 30;

player_x=10;
player_y=10;

player_object=" "

function player_update(){
     
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })
}

function new_img(get_img){
     
    fabric.Image.fromURL(get_img, function(img){
        block_object=img;
        block_object.scaleToWidth(block_img_width)
        block_object.scaleToHeight(block_img_height)
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object);
    })
}
window.addEventListener("keydown", my_keypressed);
function my_keypressed(e){
    keypressed=e.keyCode;
     if (e.shiftKey && keypressed=="80"){
         block_img_height=block_img_height+10;
         block_img_width=block_img_width+10
         document.getElementById("width").innerHTML=block_img_width;
         document.getElementById("height").innerHTML=block_img_height;
     }
     if (e.shiftKey && keypressed=="77"){
        block_img_height=block_img_height-10;
        block_img_width=block_img_width-10
        document.getElementById("width").innerHTML=block_img_width;
        document.getElementById("height").innerHTML=block_img_height;
    }
    
    if (keypressed=="38"){
        console.log("up");
       up();
    }
    if (keypressed=="37"){
        console.log("left");
       left();
    }
    if (keypressed=="39"){
        console.log("right");
    right();
    }
    if (keypressed=="40"){
        console.log("down");
       down();

    }

    if (keypressed=="87"){
        new_img("wall.jpg")
        console.log("w")
    }
    if (keypressed=="71"){
        new_img("ground.png")
        console.log("g")
    }
    if (keypressed=="68"){
        new_img("dark_green.png")
        console.log("d")
    }
    if (keypressed=="76"){
        new_img("light_green.png")
        console.log("l")
    }
    if (keypressed=="84"){
        new_img("trunk.jpg")
        console.log("t")
    }
    
    if (keypressed=="82"){
        new_img("roof.jpg")
        console.log("r")
    }
    if (keypressed=="89"){
        new_img("yellow_wall.png")
        console.log("y")
    }
    if (keypressed=="85"){
        new_img("unique.png")
        console.log("u")
    }
    if (keypressed=="67"){
        new_img("cloud.jpg")
        console.log("c")
    }
}
