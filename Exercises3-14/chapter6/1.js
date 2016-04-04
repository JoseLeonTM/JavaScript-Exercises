/**
 * Created by Jose Leon on 2/9/2016.
 */

Quadrilateral.prototype=Object.create(Shape.prototype);
Quadrilateral.prototype.constructor=Quadrilateral;
Square.prototype=Object.create(Quadrilateral.prototype);
Square.prototype.constructor=Square;
Triangle.prototype=Object.create(Shape.prototype);
Triangle.prototype.constructor=Triangle;

function Shape(){
    this.Edges=[];
}
Shape.prototype.display=function(){
    return "The shape is displaying";
};
function Quadrilateral() {
    //Shape.call(this);
}
Quadrilateral.prototype.area=function(x,y){
        return x*y;
    };
Quadrilateral.prototype.perimeter=function(shape){
        var per=0;
        for(var i=0;i<shape.length;i++){
            per+=shape[i];
        }
        return per;
};

function Square(){
    Shape.call(this);
    Quadrilateral.call(this);
}
function Triangle(){
    Shape.call(this);
    this.area=function(b,h){
        return (b*h)/2;
    }
}

var square= new Square();

square.Edges.push(3,3,3,3);

var triangle= new Triangle();
triangle.Edges.push(6,4,4);
triangle.height=(Math.sqrt(Math.pow(triangle.Edges[0]/2,2)+Math.pow(triangle.Edges[1],2)));

document.getElementById("Title1").innerHTML="'square' is an instance of Square, Quadrilateral and Square.";
document.getElementById("result1").innerHTML="The area of square is: "+square.area(square.Edges[0],square.Edges[1]);
document.getElementById("result1.1").innerHTML="The perimeter of 'square' is: "+square.perimeter(square.Edges);

document.getElementById("Title1.2").innerHTML="'triangle' is an instance of Triangle and Square.";
document.getElementById("result1.2").innerHTML="The area of 'triangle' is: "+triangle.area(triangle.Edges[0],triangle.height);


function Pokemon(){
    this.level=1;
}
FireType.prototype=Object.create(Pokemon.prototype);
FireType.prototype.constructor=FireType;
WaterType.prototype=Object.create(Pokemon.prototype);
WaterType.prototype.constructor=WaterType;
RockType.prototype=Object.create(Pokemon.prototype);
RockType.prototype.constructor=RockType;
function FireType(){
    Pokemon.call(this);
    this.type='Fire';
    this.weakness=['water','ground','rock'];
}
FireType.prototype.attack=function(){
    return "used Fireblast!";
};
function WaterType(){
    Pokemon.call(this);
    this.type='Water';
    this.weakness=['grass','electric'];
}
WaterType.prototype.attack=function(){
    return "used Hydropump!";
};
function RockType(){
    Pokemon.call(this);
    this.type='Rock';
    this.weakness=['water','fighting','ice','steel'];
}
RockType.prototype.attack=function(){
    return "used Rock slide!";
};

Trainer = function() {
    var charizard = new FireType(); charizard.name='Charizard';
    charizard.level=36;
    var blastoise=new WaterType(); blastoise.name='Blastoise';
    blastoise.level=32;
    document.getElementById("Title1.3").innerHTML=charizard.name+" is a level "+charizard.level+", "+charizard.type+"-type pokemon";
    document.getElementById("result1.3").innerHTML=charizard.name+" "+charizard.attack();

    document.getElementById("Title1.4").innerHTML=blastoise.name+" is a level "+blastoise.level+", "+blastoise.type+"-type pokemon";
    document.getElementById("result1.4").innerHTML=blastoise.name+" "+blastoise.attack();
    var weakness =function(weakness) {
        var weakList='';
        for (var i = 0; i < weakness.length; i++) {
            weakList += weakness[i];
            if (i == weakness.length - 2) weakList += " and ";
            else if (i != weakness.length-1) weakList += ", ";
        }
        return weakList;
    };
    document.getElementById("result1.5").innerHTML=blastoise.name+" is weak against "+weakness(blastoise.weakness) + " attacks";
};

Tom = new Trainer();

