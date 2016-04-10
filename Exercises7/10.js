/**
 * Created by Jose Leon on 4/9/2016.
 */
(function ex3_3MatchPalindromeWords(){
    var button=document.getElementById('matchPalindromes');
    button.addEventListener('click',matchPalindromes,false);
    var input=document.getElementById('inputPalindromeWords');
    function matchPalindromes(){
        text=input.value;
        function checkIfPalindrome(words){
            var palindromes=[];
                for (var i = 0; i < words.length; i++) {
                    var regex="";
                    var amount = Math.floor(words[i].length / 2);
                    for (var a = 0; a < amount; a++) {
                        regex += "(\\w)";
                    }
                    regex += "[^\\1]?";
                    for (a = amount-1; a >= 0; a--) {
                        regex +="\\"+ (a+1);
                    }
                    console.log(words[i]);
                    console.log(regex);
                    if(words[i].match(regex))palindromes.push(words[i]);
                }
            return palindromes;
        }
        getParagraph('#exercise3-3 p').textContent=checkIfPalindrome(text.match(/\b[a-z]+\b/g));
    }
})();