/**
 * Created by Jose Leon on 4/8/2016.
 */


(function ex2_3NumbersAndLetters(){
    var button=document.getElementById('checkFileNames');
    button.addEventListener('click',checkFileName,false);
    var input=document.getElementById('inputFileName');

    function checkFileName(){
        var regex=/[a-zA-Z]+\.(java|txt|cpp)$/;
        var match=input.value.match(regex);
        if(match){
            getParagraph('#exercise2-3 p').textContent = 'This is a '+match[1]+' file.';
            getParagraph('#exercise2-3 p').style.color = "#448846";
        }
        else {
            getParagraph('#exercise2-3 p').textContent = "This is not the file type we are looking for.";
            getParagraph('#exercise2-3 p').style.color = "#FE4A4D";
        }
    }
})();