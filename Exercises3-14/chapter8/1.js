/**
 * Created by Jose Leon on 2/29/2016.
 */
var words= {
    article:['the', 'a'],
    verb:['sleeps','eats','runs','walks','flies','thinks','reads','jumps','laughs'],
    noun:['dog','cat','boy','girl','spider','turtle','woman','man','doctor','horse'],
    preposition:['on','in','beside','at','above'],
    place:['house','chair','tree','room','basement','restaurant','table','kitchen','sea']
};

function print(){
    setInterval(function printSentence(){
            var sentence='';
            sentence+=words.article[Math.floor(Math.random()*2)].replace(/(^[a-z])/,
                    //x=> x.toUpperCase() ////////////////LAMBDA EXPRESSION SOLUTION//////////////////////
                    function(full,first){return first.toUpperCase();}
                )+" ";
            sentence+=words.noun[Math.floor(Math.random()*10)]+" ";
            sentence+=words.verb[Math.floor(Math.random()*9)]+" ";
            sentence+=words.preposition[Math.floor(Math.random()*5)]+" ";
            sentence+=words.article[Math.floor(Math.random()*2)]+" ";
            sentence+=words.place[Math.floor(Math.random()*9)]+" ";
            console.log(sentence);
            document.getElementById("result1").innerHTML=sentence;
        },
        60000);
}
document.getElementById("Title1").innerHTML="Random generated sentence: ";
print();
