/**
 * Created by Jose Leon on 2/5/2016.
 */
    var a=1;
    var b=2;
    var c=4;
var calculator = {
    add : function(){
        var answer= 0;
        for(var i=0;i<arguments.length;i++){
            answer += arguments[i];
        }
        return answer;
    },
    multiply : function(){
        var answer= 0;
        for(var i=0;i<arguments.length;i++){
            if(answer!=0) {
                answer *= arguments[i];
            }
            else{
                answer=arguments[i];
            }
        }
        return answer;
    },
    factorial: function(n){
        var answer= 1;
        for(var i=1;i<=n;i++){
            answer *= i;
        }
        return answer;
    }
};
//addition
document.getElementById("Title3").innerHTML = "The sum of "+ a + ", " + b + " and " + c + " is:";
document.getElementById("result3").innerHTML = calculator.add(a,b,c);
//multiplication
document.getElementById("Title3.2").innerHTML = "The product of "+ a + ", " + b + " and " + c + " is:";
document.getElementById("result3.2").innerHTML = calculator.multiply(a,b,c);
//factorial
document.getElementById("Title3.3").innerHTML = "The factorial number of " + c + " is:";
document.getElementById("result3.3").innerHTML = calculator.factorial(c);