


// var canvas = document.getElementById('c');

// var w = window.innerWidth;
// var h = window.innerHeight;


//  canvas.width = w;
//  canvas.height = h;

// var ctx = canvas.getContext("2d");
// var circleCont = [];

// for ( var i = 0; i < 400; i++) {
// 	var circle = {
// 		x: Math.random()*w,
// 		y: Math.random()*h,
// 		z: Math.random()*5
// 	}

// 	circleCont.push(circle);
// } 

// function draw() {

	
// 	ctx.clearRect(0 /*x axsis*/,/*y axsis*/ 0,w,h);
// 	ctx.beginPath();	//for performance
// 	for ( var i = 0; i< circleCont.length; i++) {
// 		var tt = circleCont[i];
// 		ctx.moveTo(tt.x,tt.y);
// 		ctx.arc(tt.x ,tt.y ,tt.z ,0 ,2*Math.PI);
// 	}

// 	ctx.fillStyle = "#fff";
// 	ctx.fill();

// 	moveCircle();
// }



// function moveCircle() {
// 	for (  var i = 0; i < circleCont.length; i++) {
// 		var tt = circleCont[i];
// 		tt.y += 1;
// 		tt.x += 1;

// 			if ( tt.x > w) {
// 		tt.x = -20;
		
// 	}
// 	if ( tt.y > h) {
// 		tt.y = -20;
// 	}

		
// 	}

// }

// setInterval(draw, 50);




var canvas = document.getElementById('c');

var w = window.innerWidth;
var h = window.innerHeight;

canvas.width = w;
canvas.height = h;

var ctx = canvas.getContext('2d');

var circleContent = [];

for (var i=0; i<400; i++) {
    var circle = {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 5
    }
    
    circleContent.push(circle);
}

function draw() {
    
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    
    for ( var i=0; i < circleContent.length; i++) {
        var tt = circleContent[i];
        ctx.moveTo(tt.x,tt.y);
        ctx.arc(tt.x,tt.y,tt.r,0,2*Math.PI);
    }
    
    ctx.fillStyle = "#fff";
    ctx.fill();
    
    movec();
}



function movec() {
    
    for ( var i=0; i< circleContent.length; i++) {
        var tt = circleContent[i];
        
        tt.y += 1;
        tt.x += 1;
        
        if(tt.x > w){
        tt.x = -20;
       
        }
        if(tt.y > h) {
            tt.y = -20;
        }
    }
}


setInterval(draw,50);





















