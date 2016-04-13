/**
 * Created by Jose Leon on 4/12/2016.
 */
(function spinningLetters(){
    var text=document.getElementById('spinningLetters').textContent;
    text=text.replace(/[A-Z]/g,function(letter){
        return "<p>"+letter+"</p>";
    });
    console.log(text);

})();