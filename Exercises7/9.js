/**
 * Created by Jose Leon on 4/8/2016.
 */

(function ex3_2ReplaceWithHashtag(){
    var button=document.getElementById('replaceHashtag');
    button.addEventListener('click',ReplaceHashtag,false);
    var input=document.getElementById('inputReplaceHashtag');
    function ReplaceHashtag(){
        var regex=new RegExp("("+input.value+")","g");
        getParagraph('#exercise3-2 p').textContent=getParagraph('#exercise3-2 p').textContent.replace(regex,'#$1');
    }
})();