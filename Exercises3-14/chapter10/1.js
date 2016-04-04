/**
 * Created by Jose Leon on 3/3/2016.
 */

var myLib={
    math:{
        real:{
            add:function(a,b){return a+b;},
            sub:function(a,b){return a-b;},
            mul:function(a,b){return a*b;}
        },
        complex:{
            Num:function(real,img){this.result=Math.pow(real,2)+img;},
            add:function(a,b){return a.result+ b.result;},
            sub:function(a,b){return a.result-b.result;},
            mul:function(a,b){return a.result*b.result;}
        },
        matrix:{
            add:function(a,b){},
            sub:function(a,b){return a-b;},
            mul:function(a,b){return a*b;},
            eye:function(size){return size;},
            dot:function(m,a){return "Dotted";},
            times:function(a,b){return a*b;}
        }
    }
};
////////////////////////////ORIGINAL CODE/////////////////////////////////
//var answer = myLib.math.real.sub(myLib.math.real.add(20,22),myLib.math.real.mul(2,5));
//var ans= myLib.math.matrix.times(myLib.math.matrix.eye(4),
// myLib.math.complex.sub(new myLib.math.complex.Num(myLib.math.real.add(5,2),-3),
//new myLib.math.complex.Num(3,4)));

//////////////////////WITH SIMPLIFICATION/////////////////////////
with(myLib.math){
    answer=real.sub(real.add(20,22),real.mul(2,5));
    ans=matrix.times(matrix.eye(4),complex.sub(new complex.Num(real.add(5,2),-3),new complex.Num(3,4)));
}
document.getElementById("Title1").innerHTML='Simplified using "with": ';
document.getElementById("result1").innerHTML="(20+22)-(2*5): "+answer;
document.getElementById("result1").innerHTML+="<br><br>4*( (5+2)^2)-3)-((3^2)+4) ): "+ans;

///////////////////////NO WITH SIMPLIFICATION////////////////////
answer2=(function(real){
    return real.sub(real.add(20,22),real.mul(2,5));
})(myLib.math.real);
ans2=(function(real,complex,matrix){
    return matrix.times(matrix.eye(4),complex.sub(new complex.Num(real.add(5,2),-3),new complex.Num(3,4)));
})(myLib.math.real,myLib.math.complex,myLib.math.matrix);

document.getElementById("Title1.2").innerHTML='Simplified without "with": ';
document.getElementById("result1.2").innerHTML="(20+22)-(2*5): "+answer2;
document.getElementById("result1.2").innerHTML+="<br><br>4*( (5+2)^2)-3)-((3^2)+4) ): "+ans2;