/**
 * Created by Jose Leon on 4/6/2016.
 */

(function ex1_1RegExMatch(){
    var Regex={
        0: /.abc/,
        1:/a+b?!!1{4}/,
        2:/.{3}a\.b/,
        3:/\w/,
        4:/\s/,
        5:/\d/,
        6:/./,
        7:/[abc]/,
        8:/(abc)/,
        9:/[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/,
        10:/\([0oOn]{1}(_|\s)[0oOn]{1}\)/
    };
    var Strings={
        0: "'abc",
        1: "aaaaaaaaaa!!1111",
        2:"lava.b",
        3:"a",
        4:" ",
        5:"3",
        6:"&",
        7:"b",
        8:"abcdefghi",
        9:"A23J@...2014.com <br><br>",
        10:"(0_o)"
    };
    (function fillParagraphs(){
        var div=document.querySelectorAll('#exercise1-1 div div');
        for(var v in Regex){
            if(Regex.hasOwnProperty(v)){
                var column1=document.createElement('p');
                column1.innerHTML=Regex[v]+"<br>";
                div[0].appendChild(column1);
            }
        }
        for(var u in Strings) {
            if (Regex.hasOwnProperty(u)) {
                var column2=document.createElement('p');
                column2.innerHTML=Strings[u]+"<br>";
                div[1].appendChild(column2);
            }
        }
    })();
    var button=document.getElementById('checkRegex');
    button.addEventListener('click',checkRegexMatch,false);
    function checkRegexMatch(){
        var column1=document.querySelectorAll('#exercise1-1 div div')[0].querySelectorAll('p');
        var column2=document.querySelectorAll('#exercise1-1 div div')[1].querySelectorAll('p');
        for(var i=0; i<column1.length;i++){
            if (Regex[i].test(Strings[i])) {
                column1[i].style.color  = '#448846';
                column2[i].style.color  = '#448846';
            }
            else {
                column1[i].style.color = '#FE4A4D';
                column2[i].style.color  = '#FE4A4D';
            }
        }
    }
})();