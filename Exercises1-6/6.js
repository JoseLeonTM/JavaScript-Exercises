/**
 * Created by Jose Leon on 4/5/2016.
 */

(function ex6DisplayTree(){
    function createTree(){
        function newElement(){
            return {
                value:(Math.floor(Math.random()*11)),
                branches:[]
            };
        }
        var head= newElement();
        console.log(head);
    }
    createTree();
})();