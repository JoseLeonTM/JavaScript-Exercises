/**
 * Created by Jose Leon on 4/9/2016.
 */
(function ex3_3MatchPalindromeWords(){
    var button=document.getElementById('translate1337');
    button.addEventListener('click',translate1337,false);
    var input=document.getElementById('inputTranslate1337');
    var dictionary={
        A:"4",
        B:"8",
        C:"<",
        D:"l)",
        E:"3",
        F:"l=",
        G:"9",
        H:"#",
        I:"l",
        J:"_/",
        K:"|<",
        L:"1",
        M:"|v|",
        N:"/v",
        O:"0",
        P:"|>",
        Q:"&",
        R:"|2",
        S:"$",
        T:"7",
        U:"l_l",
        V:"\/",
        W:"|/\\|",
        X:"><",
        Y:"¥",
        Z:"2"
    };
    function translate1337(){
        getParagraph('#optional p').textContent=input.value.replace(/(\w)/g,function(letter){
            letter=letter.toUpperCase();
            return dictionary[letter];
        });
    }
})();