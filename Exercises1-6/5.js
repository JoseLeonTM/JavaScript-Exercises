/**
 * Created by Jose Leon on 4/5/2016.
 */

(function ex5showAmount(){
    var button=document.querySelector('#exercise5 button');
    button.addEventListener('click',checkText,false);
    function checkText(){
        var text= document.querySelector('#exercise5 input').value;
        if(text.match(/^\D/)){
            document.querySelector('#exercise5 p').textContent=text.match(/[aeiou]/g) !== null ?
            text.match(/[aeiou]/g).length :
            0;
        }
        else{
            //document.querySelector('#exercise5 p').textContent=text.replace(/\.\d+/,"").match(/(\d)/g).length;
            var zeroes= text.match(/^0/) ? 1 : 0;
            var amount=Math.floor(Math.log(text)/ Math.LN10 + 1);
            //var amount=Math.floor(Math.log(text)/ Math.LN10 + 1) !="-Infinity" ?
            //    Math.floor(Math.log(text)/ Math.LN10 + 1) : 0;
            if(amount=='-Infinity' || amount<0)amount=0;
            document.querySelector('#exercise5 p').textContent=amount+zeroes;
        }
    }
})();