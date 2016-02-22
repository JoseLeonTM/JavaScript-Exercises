//Created by Jose Leon on 2/5/2016.
function pokedex(print,justPrint){
    var result=""
    if(justPrint){
        for(var owned in charmander){
            if(charmander.hasOwnProperty(owned)){
                result += owned + " ";
            }
        }
        return result;
    }
    for(owned in charmander){
            result += owned + " ";
    }
    return result;
}
function Pokemon(name,type,level) {
    this.name= name;
    this.type= type;
    this.level= level;
}
var charmander = new Pokemon("Charmander","Fire",12);

Pokemon.prototype.attacks=["Ember","Scratch","Growl","Cut"];
Pokemon.prototype.nature = "Smart";

document.getElementById("Title5").innerHTML = "The properties of the object are:";
document.getElementById("result5").innerHTML = pokedex(true,true);
document.getElementById("Title5.2").innerHTML = "But the properties the objects can reach are:";
document.getElementById("result5.2").innerHTML = pokedex(true,false);