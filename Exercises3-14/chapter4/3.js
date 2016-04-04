/**
 * Created by Jose Leon on 2/9/2016.
 */

///////////////////////USING PREFIXES//////////////////////////////
//function NumberHolder (number) {
//    this._number = number;
//}
//NumberHolder.prototype.getValue = function(){
//        return this._number;
//    };
//NumberHolder.prototype.setValue = function(number){
//    if(typeof number == "number")
//    this._number = number;
//};
//var numberHolder = new NumberHolder();
//numberHolder.setValue(4.256);
//numberHolder._number="asd";
//document.getElementById("Title3").innerHTML = "The number held is: ";
//document.getElementById("result3").innerHTML = numberHolder.getValue();

///////////////////////////////USING CLOSURES//////////////////////////////
function NumberHolder(_number){
    var _number=0;
    this.getNumber = function(){
        return _number;
    };
    this.setNumber = function(number){
        if (typeof number == "number")
            _number=number;
    };
}
var numberHolderClosures = new NumberHolder;

numberHolderClosures.setNumber(23);

numberHolderClosures._number= "sad";
document.getElementById("Title3").innerHTML = "The number held is: ";
document.getElementById("result3").innerHTML = numberHolderClosures.getNumber();