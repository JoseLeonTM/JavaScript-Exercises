/**
 * Created by Jose Leon on 4/8/2016.
 */

(function ex3_1ShiftCyclically(){
    var button=document.getElementById('shiftText');
    button.addEventListener('click',shiftText,false);
    var input=document.getElementById('inputShiftText');
    function shiftText(){
        var text=input.value;
        var newText="";
        for(var i=0;i<text.length;i++) {
            if(text[i].match(/\w/g)) {
                var newChar = String.fromCharCode(text.charCodeAt(i) + 1);
                switch (newChar) {
                    case ":":newChar = 0;break;
                    case "[":newChar = 'A';break;
                    case "{":newChar = 'a';break;
                }
                newText += newChar;
            }
            else newText+=text[i];
        }
        getParagraph('#exercise3-1 p').textContent = newText;
    }
})();