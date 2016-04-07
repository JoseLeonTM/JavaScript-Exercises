/**
 * Created by Jose Leon on 4/7/2016.
 */

(function ex2_1DateFormats(){
    var button=document.getElementById('checkDate');
    button.addEventListener('click',checkDate,false);
    var input=document.getElementById('inputDate');
    var days={
        january:31,
        february:29,
        march:31,
        april:30,
        may:31,
        june:30,
        july:31,
        august:31,
        september:30,
        october:31,
        november:30,
        december:31
        };
    function checkDate(){
        var regex=/(january|february|march|april|may|june|july|august|september|october|november|december)\s+([0-3][0-9])\s+([\d]{4})/i;
        var match=input.value.match(regex);
        if(days[match[1].toLowerCase()]>=match[2]){
            document.querySelector('#exercise2-1 p').textContent = "Input is a date.";
            document.querySelector('#exercise2-1 p').style.color = "#448846";
        }
        else {
            document.querySelector('#exercise2-1 p').textContent = "Input is not a date.";
            document.querySelector('#exercise2-1 p').style.color = "#FE4A4D";
        }
    }
})();