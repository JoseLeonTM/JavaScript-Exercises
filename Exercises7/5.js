/**
 * Created by Jose Leon on 4/8/2016.
 */
(function ex2_5Palindrome(){
    var button=document.getElementById('checkPalindrome');
    button.addEventListener('click',checkPalindrome,false);
    var input=document.getElementById('inputPalindrome');

    function checkPalindrome(){
        var regex=/(\w)(\w)\w\2\1/;
        var match=input.value.match(regex);
        if(match){
            getParagraph('#exercise2-4 p').textContent = match[0]+' is a palindrome';
            getParagraph('#exercise2-4 p').style.color = "#448846";
        }
        else {
            getParagraph('#exercise2-4 p').textContent = "The input is not a palindrome.";
            getParagraph('#exercise2-4 p').style.color = "#FE4A4D";
        }
    }
})();