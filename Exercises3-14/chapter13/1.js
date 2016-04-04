/**
 * Created by Jose Leon on 3/25/2016.
 */

//////////////////////////////////TABLE GENERATION/////////////////////////////////////////
var table = document.createElement('table'), columns= 5,lines=5;
var article=document.getElementsByTagName('article')[0];
article.appendChild(table);
(function(){
    var tr,count=0;
    for(var n=0;n<lines;n++) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        //table.appendChild(document.createElement('tr'));
        for(var i=0;i<columns;i++) {
            var td = document.createElement('td');
            td.style.opacity=0;
            td.textContent=count++;
            tr.appendChild(td);
        }
    }
})();

document.getElementById('Title1').innerHTML="Click a cell to print its number";
table.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase()=='td'){
        event.target.style.opacity=1;
    }
},false);

