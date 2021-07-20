var weight=[35,40,45,50,55];
//console.log(weight);

var average;

function setup(){
    createCanvas(500,500);
     var sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4];
    //console.log(weight.length);
    average=sum/weight.length;
    //console.log(average);
    console.log(sum);
}

function draw(){
    background("magenta");
    
}
