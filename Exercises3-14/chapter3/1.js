/**
 * Created by Jose Leon on 2/5/2016.
 */
function multiply(){
    var x = 9;
    var y = 6;

    var product = x*y;

    document.getElementById("Title1").innerHTML = "The product of "+ x + " and " + y + " with base 13 is:";
    var answer = product.toString(13);
    return answer;
}
//multiply();
document.getElementById("result1").innerHTML = multiply();
