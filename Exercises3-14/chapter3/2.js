/**
 * Created by Jose Leon on 2/5/2016.
 */
function addition(){
    var answer=0;
    for(var i=0; i < arguments.length; i++){
        answer +=arguments[i];
    }
    return answer;
}

document.getElementById("result2").innerHTML = addition(2,1,5,7,98,2,4);
