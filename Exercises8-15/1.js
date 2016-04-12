/**
 * Created by Jose Leon on 4/11/2016.
 */
(function notes(){
    var id=1;
    var container = document.getElementById('noteHolder');
    var createbutton = document.getElementById('newNote');
    if(window.addEventListener) {
        createbutton.addEventListener('click', createNote, false);
        container.addEventListener('click',noteEvents,false);
    }
    else if(window.attachEvent) {
        button.attachEvent('click', createNote);
        container.attachEvent('click',noteEvents);
    }
    //console.log(window.localStorage.getItem('Note '+3));
    console.log(window.localStorage);
    (function readyNotes(){
        var index=window.localStorage.length;
        if(window.localStorage.length){
            for(var i in window.localStorage) {
                if(window.localStorage.hasOwnProperty(i) && i!='length') {
                    //console.log(typeof window.localStorage.getItem('Note '+index));
                    //container.appendChild(window.localStorage.getItem('Note '+index));
                }
            }
        }
    })();
    function createNote(){
        var fragment=document.getElementsByTagName('template')[0].content;
        var newNote=fragment.querySelector('div');
        newNote.setAttribute('class','note');
        newNote.dateCreated= new Date();
        newNote.dateModified=new Date();
        newNote.id=id.toString();
        //console.log(newNote);
        newNote.querySelector('h4').textContent="Note "+parseInt(id++);
        newNote.querySelector('.editNote').disabled='true';
        //console.log(newNote.querySelector('.editNote').disabled);
        newNote.querySelector('.noteContent').contentEditable='true';
        var stringObject=JSON.stringify(newNote['content']);
        window.localStorage.setItem(newNote.querySelector('h4').textContent,newNote);
        container.appendChild(newNote.cloneNode(true));
    }
    function noteEvents(note){
        //console.log(note.target);
        function getNoteBody(target){
            if(target.getAttribute('class')=='note') return target;
            if(target.parentNode.getAttribute('class')=='note') return target.parentNode;
            if(target.parentNode.parentNode.getAttribute('class')=='note') return target.parentNode.parentNode;
            return target;
        }
        var noteBody=getNoteBody(note.target);
        var content=noteBody.querySelector('.noteContent');
        var saveButton=noteBody.querySelector('.saveNote');
        var editButton=noteBody.querySelector('.editNote');
        //console.log(note.target);
        //////////////////////////////////////EDIT NOTES///////////////////////////////////
        if(note.target.getAttribute('class')=="editNote"){
            content.setAttribute('editable','true');
            content.setAttribute('autofocus','true');
            saveButton.style.display="block";
            //editButton.disabled='false';
        }
        //////////////////////////////////////SAVE CHANGES/////////////////////////////////////
        if(note.target.getAttribute('class')=="saveNote"){
            editButton.setAttribute('disabled','false');
            editButton.disabled='false';
            //console.log(editButton.disabled);
            content.setAttribute('contentEditable','false');
            saveButton.style.display="none";
        }
        //////////////////////////////////DELETE NOTES////////////////////////////////////
        if(note.target.getAttribute('class')=="deleteNote"){
            window.localStorage.removeItem(noteBody.querySelector('h4').textContent);
            console.log(window.localStorage);
            window.localStorage.clear();
            //console.log(noteBody.id);
            //console.log("children: ",container.childNodes);
            container.removeChild(document.getElementById(noteBody.id));
        }
    }
})();