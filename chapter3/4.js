/**
 * Created by Jose Leon on 2/5/2016.
 */
var image= {
    name : "Dog",
    data : new Array(1500),
    width : 50,
    height : 30,
    format: "JPEG",
    pixelData: function(x,y) {
        for(var i=0; i<this.data.length;i++){
                this.data[i] = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
        return this.data[x+(y*this.width)];
    }
};
document.getElementById("Title4").innerHTML = "The name of the image is: ";
document.getElementById("result4").innerHTML =  image.name;
document.getElementById("Title4.2").innerHTML = "The width of the image is: ";
document.getElementById("result4.2").innerHTML =  image.width + " pixels";
document.getElementById("Title4.3").innerHTML = "The height of the image is: ";
document.getElementById("result4.3").innerHTML =  image.height + " pixels";
document.getElementById("Title4.4").innerHTML =  "The color of the pixel in 30,18 is:";
document.getElementById("result4.4").innerHTML =  image.pixelData(30,18);