/**
 * Created by Jose Leon on 2/9/2016.
 */
function  fibonacci(number,previous1,previous2){
    if(previous1== null){
        previous1 = 0;
        previous2= 1;
        fibonacci.counter=2;
    }
    var value = previous1 + previous2;

    fibonacci.counter++;
    if(fibonacci.counter<=number){return fibonacci(number,previous2,value)}
    return value;
}

var number=9;

document.getElementById("Title1").innerHTML = "The fibonacci value number " +number+ " is:";
document.getElementById("result1").innerHTML = fibonacci(number);