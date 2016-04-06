/**
 * Created by Jose Leon on 4/5/2016.
 */
(function ex6DisplayTree(){
    function createTree(){
        function newElement(parent,branchNo){
            var value;
            if(!parent)
                value=1;
            else{
                value=parent+branchNo.toString();
            }
            return {
                value:value,
                branches:[]
            };
        }
        var head= newElement();
        function makeBranches(num,root){
            if(root!==undefined) {
                for (var i = 0; i < num; i++) {
                    root.branches.push(newElement(root.value, i + 1));
                }
            }
        }
        makeBranches(3,head);
        makeBranches(1,head.branches[0]);
        makeBranches(2,head.branches[1]);
        makeBranches(2,head.branches[2]);
        makeBranches(1,head.branches[2].branches[1]);
        return head;
    }
    var yggdrasil=createTree();
    displayTree(yggdrasil);
    function displayTree(tree){
        var article=document.querySelector('#exercise6');
        function printAndCheckBranches(root,container){
            var branch=document.createElement('div');
            container.appendChild(branch);
            var line=document.createElement('p');
            line.textContent=root.value;
            branch.appendChild(line);
            for(var i=0;i<root.branches.length;i++){
                printAndCheckBranches(root.branches[i],branch);
            }
        }
        printAndCheckBranches(tree,article);
    }
})();