/**
 * Created by Jose Leon on 2/24/2016.
 */
function dateConverter(date){
    var holidays={
        '01/01':'New year',
        '02/11':'Foundation day',
        '05/03':'Constitution Memorial day',
        '05/05':"Children's day",
        '08/11':'Mountain day',
        '11/03':'Culture day',
        '12/23':"The Emperor's Birthday"
    };
    var japDate= date.replace(
    /(\d{1,2})\/(\d{1,2})\/(\d{4})/,
    function(full,month,day,year){
        function filler(num){
            if(num.length==1) num='0'+num;
            return num;
        }
        month=filler(month);day=filler(day);
        return year+'/'+month+'/'+day;
    }
    );
    japDate.replace(
        /\/([\d]{1,2}\/[\d]{1,2})/,
        function(full,date){
            if(holidays[date]) japDate+=" ("+holidays[date]+")";
        }
    );
    return japDate;
}
originalDate='11/2/2011';
document.getElementById("Title2").innerHTML="In the US the date is "+originalDate;
document.getElementById("result2").innerHTML="And in Japan is: "+dateConverter(originalDate);