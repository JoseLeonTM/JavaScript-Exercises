/**
 * Created by Jose Leon on 4/7/2016.
 */

/////////////////////////////////////GLOABL FUNCTION TO GET A SELECTED ELEMENT//////////////////////////////////////
function getParagraph(selector){
    return document.querySelector(selector);
}

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
        var regex=/^(january|february|march|april|may|june|july|august|september|october|november|december)\s+([0-3][0-9])\s+([\d]{4}$)/i;
        var match=input.value.match(regex);
        if(match){
            if(days[match[1].toLowerCase()]>=match[2]) {
                console.log(getParagraph('#exercise2-1 p'));
                getParagraph('#exercise2-1 p').textContent = "Input is a date.";
                getParagraph('#exercise2-1 p').style.color= "#448846";
            }
        }
        else {
            getParagraph('#exercise2-1 p').textContent = "Input is not a date.";
            getParagraph('#exercise2-1 p').style.color = "#FE4A4D";
        }
    }
})();