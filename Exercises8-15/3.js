/**
 * Created by Jose Leon on 4/12/2016.
 */
(function spinningLetters(){
    ////////////////////////////////////////////////////////////////////RESET SELECTION///////////////////////////
    var container=document.getElementById('exercise3');
    container.addEventListener('mouseleave',deselect,false);

    ///////////////////////////////////////////////////////////////////////GET THE LETTERS//////////////////////////
    var text=document.getElementById('spinningLetters');
    text.innerHTML=text.innerHTML.replace(/[A-Z]/g,function(letter){
        return "<p>"+letter+"</p>";
    });
    var letters=text.querySelectorAll('p');
    var selectedLetter;
    ///////////////////////////////////////////////////////////////////////GET THE BUTTONS////////////////////////
    var pauseAll=document.getElementById('pauseAll');
    pauseAll.addEventListener('click',pauseResumeSpins,false);
    var pauseButton =document.getElementById('pause');
    pauseButton.addEventListener('click',pauseResumeLetter,false);
    pauseButton.disabled='true';
    var spinSpeed=document.getElementById('spinSpeed');
    spinSpeed.addEventListener('mouseup',changeSpeed,false);

    ///////////////////////////////////////////////////////////////ADD EVENT TO THE TEXT///////////////////////////////
    text.addEventListener('click',openControllers,false);

    /////////////////////////////////////////////////////////////FUNCTION DECLARATIONS////////////////////////////
    (function makeSpins(){
        for(var i=0;i<letters.length;i++){
            letters[i].speed=(Math.ceil(Math.random()*20));
            letters[i].orientation= Math.random()>0.5 ? -1 : 1;
            letters[i].moving=true;
            letters[i].spin= letters[i].style.transform.match(/[0-9]{1,3}/);
            if(letters[i].spin==null) letters[i].spin=0;
            letters[i][i]=setInterval(function(i){
                    letters[i].spin+=letters[i].speed*letters[i].orientation;
                    if(letters[i].spin==360 || letters[i].spin==-360) letters[i].spin=0;
                    letters[i].style.transform = "rotate(" + letters[i].spin + "deg)";
            },50,i);
        }
    })();
    function pauseResumeSpins(e) {
        if(e.target.textContent=="Pause All") {
            pauseSpins();
        }
        else{
            resumeSpins();
        }
        function pauseSpins() {
            for (var i = 0; i < letters.length; i++) {
                clearInterval(letters[i][i]);
                letters[i].moving=false;
            }
            e.target.textContent="Resume All";
        }
        function resumeSpins(){
            for (var i = 0; i < letters.length; i++) {
                letters[i][i]=setInterval(function(e){
                    letters[e].spin+=letters[e].speed*letters[e].orientation;
                    letters[e].moving=true;
                    if(Math.abs(letters[e].spin)>360) letters[e].spin=0;
                    letters[e].style.transform = "rotate(" + letters[e].spin + "deg)";

                },50,i);
            }
            e.target.textContent="Pause All";
        }
    }
    function pauseResumeLetter(e) {
        if(e.target.textContent=="Pause") pauseLetter();
        else resumeLetter();
        function pauseLetter() {
            for (var i = 0; i < letters.length; i++) {
                if (selectedLetter[i]) {
                    clearInterval(selectedLetter[i]);
                    selectedLetter.moving=false;
                }
            }
            e.target.textContent="Resume";
        }
        function resumeLetter() {
            for (var i = 0; i < letters.length; i++) {
                if (selectedLetter[i]) {
                    letters[i][i]=setInterval(function(e){
                        letters[e].spin+=letters[e].speed*letters[e].orientation;
                        letters[e].moving=true;
                        if(Math.abs(letters[e].spin)>360) letters[e].spin=0;
                        letters[e].style.transform = "rotate(" + letters[e].spin + "deg)";
                    },50,i);
                }
            }
            e.target.textContent="Pause";
        }
    }
    function openControllers(e){
        if(e.target.parentNode==text) {
            if(selectedLetter){
                selectedLetter.style.color = "black";
                selectedLetter = null;
            }
            pauseButton.parentNode.style.borderColor = '#000';
            pauseButton.parentNode.querySelector('label').style.color = '#000';
            pauseButton.disabled = '';
            selectedLetter = e.target;
            if (selectedLetter.moving){
                pauseButton.textContent="Pause";
            }
            else pauseButton.textContent="Resume";
            selectedLetter.style.color = "red";
            pauseButton.style.backgroundColor = "red";
            spinSpeed.value = selectedLetter.speed;
        }
    }
    function changeSpeed(){
        if(selectedLetter){
            selectedLetter.speed=this.value;
        }
    }
    function deselect(){
        if(selectedLetter){
                selectedLetter.style.color = "black";
                selectedLetter = null;
            }
        pauseButton.disabled = 'true';
        pauseButton.textContent='Pause';
        spinSpeed.value = 10;
        spinSpeed.parentNode.style.borderColor = "#c4c4c4";
        spinSpeed.parentNode.querySelector('label').style.color = "#c4c4c4";
        pauseButton.style.backgroundColor = "#c4c4c4";
        //}
    }
})();