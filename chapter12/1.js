/**
 * Created by Jose Leon on 3/17/2016.
 */

div = document.getElementById('a');

function fetchAttributes(element, property) {
        return element.getAttribute(property);

    }
document.getElementById("Title1").innerHTML="This are the attributes the div has: ";
document.getElementById("result1").innerHTML='id= '+fetchAttributes(div,'id');
document.getElementById("result1").innerHTML+="<br>class= " +fetchAttributes(div,'class');
document.getElementById("result1").innerHTML+="<br>style= "+fetchAttributes(div,'style');
document.getElementById("result1").innerHTML+="<br>val= "+fetchAttributes(div,'val');
