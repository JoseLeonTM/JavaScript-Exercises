/**
 * Created by Jose Leon on 3/31/2016.
 */


var txtContent = "Batman V Superman: Dawn of Justice is quite lengthy already,"
        + "but according to Producer Deborah Snyder there was one scene"
        + "in particular that she was sad to see go."
        + " In a sit down with Collider, Snyder was asked if there was"
        + "one scene that stuck out to her that wasn't in the final cut of the film.";
var container = document.getElementById('container');

function newNote(image,content) {
    ///////////////////////////GENERATION OF ELEMENTS WITH TEMPLATES//////////////////////////
    var note = document.getElementById("template1");
    note.content.querySelector('img').src = image;
    note.content.querySelector('p').textContent = content;
    //////////////////////////GETTING THE CONTAINING ELEMENT/////////////////////
/////////////////////////////CLONING THE TEMPLATE INTO A NEW NODE////////////////////////
    container.appendChild(note.content.cloneNode(true));
    ////////////////////////AN EVENT LISTENER IS PLACED IN THE INSERTED NOTE///////////////////////////////
    var currentNote=container.lastElementChild;
    currentNote.addEventListener('click',bindFullNote(currentNote),false);
}
newNote('bvs.jpg',txtContent+txtContent+txtContent+txtContent);
newNote('got.jpg',txtContent+txtContent+txtContent+txtContent);
newNote('civilwar.jpg',txtContent+txtContent+txtContent+txtContent);

//note1.addEventListener('click',bindFullNote(note1),false);

function bindFullNote(elem) {
    return function toFullNote() {
        var fullNote = document.querySelector('#template2');
        fullNote.content.querySelector('img').src = elem.querySelector('img').src;
        fullNote.content.querySelector('p').textContent = elem.querySelector('p').textContent;
        document.getElementsByTagName('article')[2].removeChild(container);
        document.getElementsByTagName('article')[2].appendChild(fullNote.content.cloneNode(true));
        var currentNote= document.getElementsByClassName('wrap')[0];
        currentNote.addEventListener('click',backToNote,false);
    }
}
function backToNote() {
        document.getElementsByTagName('article')[2].appendChild(container);
        document.getElementsByTagName('article')[2].removeChild(document.getElementsByClassName('wrap')[0]);
        delete document.getElementsByClassName('wrap')[0];
}

