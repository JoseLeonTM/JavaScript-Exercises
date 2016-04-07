/**
 * Created by Jose Leon on 4/6/2016.
 */

(function ex0RegExMatch(){
    var Regex={
        1: "/.abc/",
        2: "/a+b?!!1{4}/",
        3:"/.{3}a\.b/",
        4:"/\w/",
        5:"/\s/",
        6:"/\d/",
        7:"/./",
        8:"/[abc]/",
        9:"/(abc)/",
        10:"/[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/",
        11:"/\([0oOn]{1}(_|\s)[0oOn]{1}\)/"
    };
    var Strings={
        1: "/.abc/",
        2: "/a+b?!!1{4}/",
        3:"/.{3}a\.b/",
        4:"/\w/",
        5:"/\s/",
        6:"/\d/",
        7:"/./",
        8:"/[abc]/",
        9:"/(abc)/",
        10:"/[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/",
        11:"/\([0oOn]{1}(_|\s)[0oOn]{1}\)/"
    };
    var ps=document.querySelectorAll('#exercise1-1 p');
    (function fillParagraphs(){
        for(var v in Regex){
            if(Regex.hasOwnProperty(v)){
                ps[0].innerHTML+=Regex[v];
                ps[0].innerHTML+="<br>";
            }
            if(Strings.hasOwnProperty(v)){
                ps[1].innerHTML+=Strings[v];
                ps[1].innerHTML+="<br>";
            }
        }
    })();
    var button=document.getElementById('checkRegex');
    button.addEventListener('click',checkRegexMatch,false);
    function checkRegexMatch(){
        for(var i in Regex){
            if(Regex.hasOwnProperty(i)) {
                if (Strings[i].match(Regex[i])) {

                }
            }
        }
    }
})();