/**
 * Created by Jose Leon on 4/5/2016.
 */
(function ex2Limit(counter){
    document.querySelector('#exercise2 p').innerHTML="This button will work "+counter+ " times.";
    function limitFn(fn,limit){
        return function limited() {
            if (limit > 0) {
                limit--;
                return fn(limit);
            }
        };
    }
    var limited= limitFn(printText,counter);
    function printText(limit) {
        return document.querySelectorAll('#exercise2 p')[1].innerHTML = "The button will work for "
            + limit + " more time(s).";

    }
    var button = document.getElementById("printFn");
    button.addEventListener('click',limited,false);
})(4);
