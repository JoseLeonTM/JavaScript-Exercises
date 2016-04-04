/**
 * Created by Jose Leon on 3/31/2016.
 */

document.getElementById('Title2').innerHTML="Columns: ";
var options=document.getElementById("options").querySelectorAll('input');
var text=document.getElementById('result2');
//var radio=document.querySelector('[name ="columns"');
function checkColumns() {
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var value = options[i].value;
            text.style = 'column-count:'+value+';'
                +'-moz-column-count:' + value+';'
                +'-webkit-column-count:'+value+';';
        }
    }
}
checkColumns();
document.getElementById("options").addEventListener("click",checkColumns,false);