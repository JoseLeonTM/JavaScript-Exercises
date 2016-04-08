/**
 * Created by Jose Leon on 4/8/2016.
 */
(function ex2_6NonNestedTags(){
    var button=document.getElementById('checkTags');
    button.addEventListener('click',checkTags,false);
    var input=document.getElementById('inputTags');

    function checkTags(){
        var regex=/<(\w+)>.+?<\/\1>/g;
        var match=input.value.match(regex);
        if(match){
            getParagraph('#exercise2-6 p').textContent = match;
            getParagraph('#exercise2-6 p').style.color = "#448846";
        }
        else {
            getParagraph('#exercise2-6 p').textContent = "There are no tag elements";
            getParagraph('#exercise2-6 p').style.color = "#FE4A4D";
        }
    }
})();