/**
 * Created by Jose Leon on 2/9/2016.
 */
function  AddArray(array,sum,counter){
    if(!counter){
        counter=0;
        sum=0;
    }
    sum += array[counter];
    counter++;
    if(counter < array.length){return AddArray(array,sum,counter)}
    return sum;
}

var numbers=[2,4,6,8,9];

document.getElementById("Title2").innerHTML = "The sum of " +numbers.slice(0,numbers.length-1)+" and "+
    numbers[numbers.length-1]+" is:";
document.getElementById("result2").innerHTML = AddArray(numbers);