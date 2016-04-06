/**
 * Created by Jose Leon on 4/5/2016.
 */

(function ex4CopyObjects(){
var characterA={
    name:"Jon",
    lastName:"Snow",
    age:16,
    weapon:"sword"
};
var characterB={

};
    var button = document.getElementById('copyObj');
    button.addEventListener('click',setProperties(characterA,characterB,['name','age']),false);
    function printProperties(obj){
        var properties=[];
        for(var n in obj){
            if(obj.hasOwnProperty(n))
            properties.push(n);
        }
        return properties.join("<br>");
    }
    document.querySelector('#exercise4 p').innerHTML= printProperties(characterA);
    function setProperties(obj1,obj2,properties){
        return function copyObj(){
            if(properties){
                for(var i= 0;i<properties.length;i++){
                    obj2[properties[i]]=characterA[properties[i]];
                }
                //if(!obj2[properties[i]])
                console.log(obj2);
            }
            else{
                for(var n in obj1){
                    if(obj1.hasOwnProperty(n)){
                        obj2[n]=n;
                    }
                }
            }
            document.querySelectorAll('#exercise4 p')[1].innerHTML= printProperties(characterB);
        }
    }
})();
