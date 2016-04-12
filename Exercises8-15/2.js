/**
 * Created by Jose Leon on 4/12/2016.
 */
(function dragableDivs(){
    //////////////////////////////////////////////DRAG FUNCTIONS////////////////////////////////////////
    this.allowDrop= function(ev) {
        ev.preventDefault();
    };
    this.drag= function(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };
    this.drop =function(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    };
    var applyButton = document.getElementById('applyChanges');
    applyButton.addEventListener('click',editDivs,false);
    var container=document.getElementById('containerCommand');
    function editDivs(){
        var bordColor=document.getElementById('borderCOLOR').value;
        var bordWidth=document.getElementById('borderWIDTH').value+"px";
        var bordRadius=document.getElementById('borderRADIUS').value+"px";
        var backColor=document.getElementById('backgroundCOLOR').value;
        var children=container.querySelectorAll('div');
        for(var i=0; i<children.length;i++) {
            children[i].style.borderColor = bordColor;
            children[i].style.borderWidth = bordWidth;
            children[i].style.borderRadius = bordRadius;
            children[i].style.backgroundColor = backColor;
        }
        //var children=container.querySelector('div');
        //children.style.borderColor=bordColor;
        //children.style.borderWidth=bordWidth;
        //children.style.borderRadius=bordRadius;
        //children.style.backgroundColor=backColor;

    }
})();