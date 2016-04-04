/**
 * Created by Jose Leon on 2/9/2016.
 */

var Mars = {
    name:'Mars',
    x:400,
    y:6000,
    z:300
}
var Earth = {
    name:'Earth',
    x:1600,
    y:-200,
    z:400
}

var Canada ={
    name:'Canada',
    x:4,
    y:7
}
var Brasil= {
    name:'Brasil',
    x:-4,
    y:-10
}

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
add(Distance,'calculation',function(x1,y1){
    return "Insuficient paramaters";
});
add(Distance,'calculation',function(x1){
    return "Insuficient paramaters";
});
add(Distance,'calculation',function(){
    return "Insuficient paramaters";
});

document.getElementById("Title5").innerHTML = "The distance between "+Canada.name+" and "+Brasil.name+" is:";
document.getElementById("result5").innerHTML = Distance.calculation(Canada.x,Canada.y,Brasil.x,Brasil.y);

document.getElementById("Title5.2").innerHTML = "The distance between "+Mars.name+" and "+Earth.name+" is:";
document.getElementById("result5.2").innerHTML = Distance.calculation(Mars.x,Mars.y,Mars.z,Earth.x,Earth.y,Earth.z);

////////INSUFICIENT PARAMETERS////////////////
document.getElementById("Title5.3").innerHTML = "If we call the function without enough parameters:";
document.getElementById("result5.3").innerHTML = Distance.calculation(Mars.x,Mars.y,Mars.z);