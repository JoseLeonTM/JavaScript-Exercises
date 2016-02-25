/**
 * Created by Jose Leon on 2/24/2016.
 */

function converter() {
        number=color.value.replace(/^#([\da-fA-F]{1,2})([\da-fA-F]{1,2})([\da-fA-F]{1,2})/,
            function (match, first, second, third) {

                function filler(num) {
                    if (num.length == 1)num += num;
                    return num;
                }

                first = filler(first);
                second = filler(second);
                third = filler(third);

                function convert(num) {
                    num = parseInt('0x' + num);
                    return num;
                }
                var converted = 'rgb(';

                first = convert(first);
                second = convert(second);
                third = convert(third);
                converted += first + ',' + second + ',' + third + ')';
                return converted;
            }
        );
    document.getElementById('result1').innerHTML = number;
}

function print(){
    arguments[0]+="hello";
    console.log(arguments);
    document.getElementById('result1').innerHTML = arguments[0];
}

var color=document.getElementById('color');
var convert = document.getElementById("convert");
    convert.addEventListener("click",converter,false);