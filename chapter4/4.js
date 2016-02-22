/**
 * Created by Jose Leon on 2/9/2016.
 */
function types(){
    for (var i=0;i<arguments.length;i++){
        document.getElementById("result4").innerHTML +=arguments[i]+ " : "+ typeof arguments[i] +"<br>";
    }
}
document.getElementById("Title4").innerHTML = "The data types of the arguments passed are: ";
types("Hello world!",4,3.14159,function(){},x= new function(){},car={});