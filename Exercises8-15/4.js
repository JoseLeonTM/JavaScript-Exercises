/**
 * Created by Jose Leon on 4/14/2016.
 */
/////////////////////////////////////////////////////FUNCTION DECLARATIONS//////////////////////////////////
//var container=document.getElementById("results");
var container =container=document.getElementById("results");
//function testSuite() {
    assert = function(value, desc) {
        ///////////////////////////////////////////////////GENERATE ASSERT RESULT///////////////////////////////////
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        /////////////////////////////////////////////APPEND ASSERT TO CORRESPONDING NODE////////////////////////
        container.appendChild(li);
        console.log(container);
        if (!value) {
            li.parentNode.parentNode.className = "fail";
        }
        return li;
    };
    test = function(name, fn) {
        container = document.getElementById("results");
        container= assert(true, name).appendChild(document.createElement('ul'));
        fn();
        container = document.getElementById("results");
    };

///////////////////////////////////////////PARTIALLY APPLIED SETTIMEOUT/////////////////////////
oldSetTimeout=setTimeout;
setTimeout=function(fn,delay){
var currentUL=container;
    oldSetTimeout(function(){
        container=currentUL;
        fn();},delay);
};
//console.oldLog=console.log;
//console.log=function(string){
//    console.oldLog("Jose: ",string);
//};

////////////////////////////////////////////////////////////////////////TESTS/////////////////////////////
//assert used inside and outside test blocks
assert(true,"Outside and before the test blocks");
test("TestBlock A", function(){
    assert(true,"Inside test block A");
    //setTimeout(function(){assert(true,"Test delayed A");}, 1500);
});
assert(true,"Outside and after the test block A");
test("TestBlock B", function(){
    setTimeout(function(){assert(true,"Test delayed B");}, 500);
    //assert(true,"Inside test block B");
});
assert(true,"Outside and after test block B");