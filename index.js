//create avatar

// for(let i=0;i<10;i++){
// let w= Math.floor(Math.random()*1000);
// let h= Math.floor(Math.random()*700);
// var red = Math.floor(Math.random() * 255);
// var green = Math.floor(Math.random() * 255);
// var blue = Math.floor(Math.random() * 255);
// // ctx.fillStyle = '#8ED6FF';
// ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + " )";
// ctx.fillRect(w,h,20,20);
// }

//function to generate random colors
// function generateRandomColor() {
// var letters = '0123456789ABCDEF';
// var color = '#';
// for (var i = 0; i < 6; i++) {
// color += letters[Math.floor(Math.random() * 16)];
// }
// return color;
// }
// for(let i=0;i<10;i++){
// let w= Math.floor(Math.random()*1000);
// let h= Math.floor(Math.random()*700);
// ctx.fillStyle=generateRandomColor();
// ctx.fillRect(w,h,20,20);
// }

//Function to move the avatar
function move(e) {
  if (e.keyCode == 39) {
    x += 5;
  }
  if (e.keyCode == 37) {
    x -= 5;
  }
  if (e.keyCode == 38) {
    y -= 5;
  }
  if (e.keyCode == 40) {
    y += 5;
  }
  c.width = c.width;
  ctx.drawImage(img2, x, y);
  ctx.drawImage(img1, w, h);
}

//keydown event calls move fn whenever arrow keys are pressed.
document.onkeydown = move;

function createAvatar() {
  var cardbody = `<div class="card mt-5" style="width: 28rem;  margin:auto;">
  <div class="card-body">
    <h5 class="card-title" style="text-align:center;">Gather Town</h5>
    <p class="card-text" style="text-align:center;">Select your avatar!!</p>
    <div class="container">
        <div class="row">
            <div class="col">
            <img src="1.png" style="width:50px; height:50px;" onclick="loadCanvas(1)"/>
            </div>
            <div class="col">
            <img src="2.png" style="width:50px; height:50px;" onclick="loadCanvas(2)"/>
            </div>
            <div class="col">
            <img src="3.png" style="width:50px; height:50px;" onclick="loadCanvas(3)"/>
            </div>
            <div class="col">
            <img src="4.png" style="width:50px; height:50px;" onclick="loadCanvas(4)"/>
            </div>
        </div>
        <br/>

        <div class="row">
            <div class="col">
            <img src="5.png" style="width:50px; height:50px;" onclick="loadCanvas(5)"/>
            </div>
            <div class="col">
            <img src="6.png" style="width:50px; height:50px;" onclick="loadCanvas(6)"/>
            </div>
            <div class="col">
            <img src="7.png" style="width:50px; height:50px;" onclick="loadCanvas(7)"/>
            </div>
            <div class="col">
            <img src="8.png" style="width:50px; height:50px;" onclick="loadCanvas(8)"/>
            </div>
        </div>
    </div>
  </div>
</div>`;
  document.getElementById("root").innerHTML = cardbody;
}

//function to display the canvas
function loadCanvas(id) {
  console.log(id);
  var player1 = id + ".png";
  var canvas = `<canvas id="myCanvas" width="1000" height="700" style="border:1px solid #000000; background-image: url('office.png'); background-size: contain;"></canvas>`;
  document.getElementById("root").innerHTML = canvas;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  //required when avatar images are added
  var img1 = new Image();
  var img2 = new Image();
  img1.src = player1;
  console.log(player1);
  //img2.src = "8.png";
  let x = 0;
  let y = 0;

  let w = Math.floor(Math.random() * 1000);
  let h = Math.floor(Math.random() * 700);
  //Creating new images
  img1.onload = () => {
    ctx.drawImage(img1, w, h);
  };
  //   img2.onload = () => {
  //     ctx.drawImage(img2, x, y);
  //   };
}
