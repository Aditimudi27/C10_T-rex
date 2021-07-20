var marks=[90,93,95,97,99];
//console.log(marks);

function averagemarks(){
var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4];

var average=sum/marks.length;
console.log(average);
}


function setup(){
    createCanvas(400,400);
    averagemarks();
}

function draw(){
    background("yellow");
}