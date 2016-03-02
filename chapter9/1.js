/**
 * Created by Jose Leon on 3/2/2016.
 */

var json="{'name':'Charmander','level':6,'attacks':['Ember','Scratch'],'type':'Fire'," +
    "'levelUp':function(){return this.level+1;},"+
    "'newAttack':function(atk){if(this.attacks.length<4){this.attacks.push(atk);return this.name+ ' learned '+atk}"+
    "else return 'This pokemon can not learn new moves.'} }";

function createPokemon(obj){
    result=obj.replace(/\n*/,"");
    return eval("("+result+")");
}
var pokemon= createPokemon(json);

pokemon.newAttack('Dig');

document.getElementById("Title1").innerHTML="This object was created from a string using the eval() method";
document.getElementById("result1").innerHTML="Name: "+ pokemon.name+ "<br> Level: "+pokemon.level+"<br> Attacks: "+pokemon.attacks.join();
document.getElementById("result1").innerHTML+="<br> Level Up! Level: "+pokemon.levelUp();
document.getElementById("result1").innerHTML+="<br>"+pokemon.newAttack('Flamethrower');
document.getElementById("result1").innerHTML+="<br>"+pokemon.newAttack('Cut');