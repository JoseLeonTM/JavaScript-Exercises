/**
 * Created by Jose Leon on 4/7/2016.
 */

(function ex2_2NumbersAndLetters(){
    var button=document.getElementById('checkNumbersAndLetters');
    button.addEventListener('click',checkForText,false);
    var input=document.getElementById('inputNumsAndLetters');

    function checkForText(){
        var regex=/(\d+[a-zA-Z])|([a-zA-Z]\d+)/;
        var match=input.value.match(regex);
        if(match){
            getParagraph('#exercise2-2 p').textContent = match[0];
            getParagraph('#exercise2-2 p').style.color = "#448846";
        }
        else {
            getParagraph('#exercise2-2 p').textContent = "There are no numbers next to a letter.";
            getParagraph('#exercise2-2 p').style.color = "#FE4A4D";
        }
    }
})();