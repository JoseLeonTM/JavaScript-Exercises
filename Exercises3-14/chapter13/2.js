/**
 * Created by Jose Leon on 3/25/2016.
 */

var article=document.getElementsByTagName('article')[1];
//////////////////////METER CREATION///////////////////////////
var meter = document.createElement('meter');
meter.setAttribute('value',3);
meter.setAttribute('min',0);
meter.setAttribute('max',3);
var button= document.createElement('button');
button.textContent="Click me!";
function clicks(){
    meter.value--;
    if(meter.value==0){
        button.removeEventListener("click",clicks,false);
        button.disabled='disabled';

    }
}
button.addEventListener("click", clicks,false);

article.appendChild(meter);
article.appendChild(button);
