/**
 * Created by Jose Leon on 4/8/2016.
 */
(function ex2_5BtoYWords(){
    var button=document.getElementById('checkWords');
    button.addEventListener('click',checkWords,false);
    var input=document.getElementById('inputWords');

    function checkWords(){
        var regex=/\b[b-yB-Y]+\b/g;
        var match=input.value.match(regex);
        if(match){
            getParagraph('#exercise2-5 p').textContent = match;
            getParagraph('#exercise2-5 p').style.color = "#448846";
        }
        else {
            getParagraph('#exercise2-5 p').textContent = "There are no words with letters between 'b' and 'y'.";
            getParagraph('#exercise2-5 p').style.color = "#FE4A4D";
        }
    }
})();