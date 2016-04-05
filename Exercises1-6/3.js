/**
 * Created by Jose Leon on 4/5/2016.
 */

(function ex3Stylize(){
    var button = document.getElementById('stylize');
    var paragraph=document.querySelector('#exercise3 p');
    button.addEventListener('click',setStyle(paragraph,'yellow','30px','black'),false);
    function setStyle(elem, color, size, bg) {
            function stylize(color, size, bg) {
                if (!color) color = "blue";
                if (!size) size = '2em';
                if (!bg)bg = "red";
                this.style.color = color;
                this.style.fontSize = size;
                this.style.backgroundColor = bg;
            }
        return function handler() {
            stylize.call(elem, color, size, bg);
        }
    }
})();