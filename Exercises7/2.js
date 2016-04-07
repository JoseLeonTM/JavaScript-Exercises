/**
 * Created by Jose Leon on 4/7/2016.
 */

(function ex2_1DateFormats(){
    var button=document.getElementById('checkDate');
    button.addEventListener('click',checkDate,false);
    var input=document.getElementById('inputDate');

    function checkDate(){
        console.log("work");
        if(/\w/.test(input.textContent)){
            document.querySelector('#exercise2-1 p').textContent="Input is a date.";
            document.querySelector('#exercise2-1 p').style.color="#448846";
        }
        else{
            document.querySelector('#exercise2-1 p').textContent="Input is not a date.";
            document.querySelector('#exercise2-1 p').style.color="#FE4A4D";
        }
    }
})();