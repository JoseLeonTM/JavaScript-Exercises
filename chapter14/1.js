/**
 * Created by Jose Leon on 3/31/2016.
 */

button=document.getElementById("Generate");

function buildGrid(){
    var result = document.getElementById("result1");
    if (result.childNodes.length > 0) {
        result.removeChild(result.firstChild);
    }
    columns=document.getElementById('Columns').value;
    lines=document.getElementById('Rows').value;
    if(columns>0 && lines>0) {
        var table = document.createElement("table");
        var tr;
        for (var i = 0; i < lines; i++) {
            tr = document.createElement('tr');
            table.appendChild(tr);
            for (var n = 0; n < columns; n++) {
                tr.appendChild(document.createElement('td'));
            }
        }
        result.appendChild(table);
    }
    else{
        result.textContent="Not enough information to build grid.";
    }
    return result;
}
button.addEventListener("click",buildGrid,false);