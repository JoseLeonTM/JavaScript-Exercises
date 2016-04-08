/**
 * Created by Jose Leon on 4/8/2016.
 */

(function ex3_1ShiftCyclically(){
    var button=document.getElementById('shiftText');
    button.addEventListener('click',shiftText,false);
    var input=document.getElementById('inputShiftText');

    function shiftText(){
        var regex=/<(\w+)>.+?<\/\1>/g;
        var match=input.value.match(regex);
            getParagraph('#exercise3-1 p').textContent = match;
            getParagraph('#exercise3-1 p').style.color = "#448846";
    }
})();