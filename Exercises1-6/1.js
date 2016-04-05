/**
 * Created by Jose Leon on 4/4/2016.
 */


function Sort(sort,custom){
    var dictionary=['water','fire','television','music','telephone','circus','bicycle','algorithm','of','bat'];
    document.getElementById('originalArray').innerHTML="This is the original array: "+dictionary;

        return dictionary.sort(function(a,b){
            if((sort=='ascending' || !sort) && !custom) {
                return +(a > b) || +(a=== b) - 1;
            }
            if(sort=='descending' && !custom){
                return +(a < b) || +(a=== b) - 1;
            }
            if(sort=='ascending' && custom=='length'){
                return +(a.length > b.length) || +(a.length=== b.length) - 1;
            }
            if(sort=='descending' && custom=='length'){
                return +(a.length < b.length) || +(a.length=== b.length) - 1;
            }
            if(sort=='ascending' && custom=='consonant'){
                return +(a.match(/[^aeiou]git/g).length > b.match(/[^aeiou]/g).length) || +(a.match(/[^aeiou]/g).length=== b.match(/[^aeiou]/g).length) - 1;
            }
            if(sort=='descending' && custom=='consonant'){
                return +(a.match(/[^aeiou]/g).length < b.match(/[^aeiou]/g).length) || +(a.match(/[^aeiou]/g).length=== b.match(/[^aeiou]/g).length) - 1;
            }
        });
}
var newArrays=document.getElementsByClassName('newArray');
newArrays[0].innerHTML="Ascending order: "+Sort();
newArrays[1].innerHTML="Descending order: "+Sort('descending');
newArrays[2].innerHTML="Word length ascending order: "+Sort('ascending','length');
newArrays[3].innerHTML="Word length descending order: "+Sort('descending','length');
newArrays[4].innerHTML="Number of consonants ascending order: "+Sort('ascending','consonant');
newArrays[5].innerHTML="Number of consonants descending order: "+Sort('descending','consonant');