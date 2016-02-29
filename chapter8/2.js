/**
 * Created by Jose Leon on 2/29/2016.
 */
var timers= {
    counterA:0,
    counterB:0,
    counterC:0,
    functions: [
        function A() {
            document.getElementById("result2").innerHTML=++timers.counterA;
        },
        function B() {
            document.getElementById("result2.2").innerHTML=++timers.counterB;
        },
        function C() {
            document.getElementById("result2.3").innerHTML=++timers.counterC;
        }
    ],
    intervals: [
        30000,
        60000,
        75000
    ],
    go: function(){
        var index= 0;
        (function start() {
                    setInterval(timers.functions[index], timers.intervals[index]);
                    index++;
                if(index<3)start();
            }
        )();
    }
};
timers.go();
document.getElementById("Title2").innerHTML="Function A: ";
document.getElementById("result2").innerHTML=timers.counterA;
document.getElementById("Title2.2").innerHTML="Function B: ";
document.getElementById("result2.2").innerHTML=timers.counterB;
document.getElementById("Title2.3").innerHTML="Function C: ";
document.getElementById("result2.3").innerHTML=timers.counterC;

