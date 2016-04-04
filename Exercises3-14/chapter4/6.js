/**
 * Created by Jose Leon on 2/9/2016.
 */

var Mars = {
    name:'Mars',
    x:400,
    y:6000,
    z:300
};
var Earth = {
    name:'Earth',
    x:1600,
    y:-200,
    z:400
}

var Canada =[4,7];
var Brasil= [-4,-10];

var Distance ={};

function add(object,name,func){
    var old = object[name];
    object[name]= function() {
        if (func.length == arguments.length) {
            return func.apply(this, arguments);
        }
        else if (typeof old == 'function') {
            return old.apply(this, arguments);
        }
    }
}

add(Distance,'calculation',function(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)).toFixed(2);
});
add(Distance,'calculation',function(x1,y1,z1,x2,y2,z2){
    return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)+Math.pow(z1-z2,2)).toFixed(2);
});
add(Distance,'calculation',function(x1,y1,x2){
    return "Insuficient paramaters";
});
add(Distance,'calculation',function(a,b){
    if(a.length==2 && b.length==2) {
        return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)).toFixed(2);
    }
    else if(a.length==3 && b.length==3) {
        return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2)).toFixed(2);
    }
    else if(a.length && b.length) {
        return "The arrays don't have the right amount of properties";
    }
    else{
        return "Insuficient paramaters";
    }
});
add(Distance,'calculation',function(x1){
    return "Insuficient paramaters";
});
add(Distance,'calculation',function(){
    return "Insuficient paramaters";
});

document.getElementById("Title6").innerHTML = "The distance from ("+Canada+") to ("+Brasil+") is:";
document.getElementById("result6").innerHTML = Distance.calculation(Canada,Brasil);

document.getElementById("Title6.2").innerHTML = "The distance is:";
document.getElementById("result6.2").innerHTML = Distance.calculation(Mars.x,Mars.y,Mars.z,Earth.x,Earth.y,Earth.z);

////////INSUFICIENT PARAMETERS////////////////
document.getElementById("Title6.3").innerHTML = "If we call the function without enough parameters:";
document.getElementById("result6.3").innerHTML = Distance.calculation(Mars.x);