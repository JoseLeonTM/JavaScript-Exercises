/**
 * Created by Jose Leon on 4/11/2016.
 */
(function notes(){
    var container = document.getElementById('noteHolder');
    var createButton = document.getElementById('newNote');
    if(window.addEventListener) {
        createButton.addEventListener('click', createNote, false);
        container.addEventListener('click',noteEvents,false);
    }
    else if(window.attachEvent) {
        createButton.attachEvent('click', createNote);
        container.attachEvent('click',noteEvents);
    }
    createButton.disabled='';
    //////////////////////////////////GENERATE NOTES IF THERE ARE IN STORE/////////////////////
    (function readyNotes(){
        if(window.localStorage.length){
            createNote(window.localStorage);
        }
    })();
    /////////////////////////////////////////NOTE GENERATION/////////////////////////////////
    function createNote(notes){
        /////////////////////////////////CHECK WHAT IDS ARE FREE///////////////////////////////
        var id = 1;
        function findNewID(){
            if(window.localStorage.getItem(id.toString())){
                id++;
                findNewID();
            }
            else return id;
        }
        findNewID();
        ////////////////////////GENERATE A HASH IN CASE NO STORED NOTES ARE SENT///////////////////
        if(!notes) {
            notes = {
                1:""
            };
        }
        for(var i in notes) {
            if(notes.hasOwnProperty(i)) {
                var fragment = document.getElementsByTagName('template')[0].content;
                var newNote = fragment.querySelector('div').cloneNode(true);
                if(!notes.length) {
                    console.log("New");
                    //////////////////////CREATE A NEW NOTE/////////////////////////////
                    newNote.id = (id++).toString();
                    createButton.disabled='true';
                    newNote.querySelector('.editNote').disabled = 'true';
                    newNote.querySelector('.noteContent').contentEditable = 'true';
                    //newNote.info = {
                    //    id: newNote.id,
                    //    text: newNote.querySelector('.noteContent').textContent,
                    //    created: new Date(),
                    //    modified: new Date()
                    //};
                    //var stringObject = JSON.stringify(newNote.info);
                    //window.localStorage.setItem(newNote.info.id, stringObject);
                }
                /////////////////////////GENERATE STORED NOTES////////////////////////
                else{
                    console.log("Stored");
                    var storedInfo=JSON.parse(notes[i]);
                    newNote.id=storedInfo.id;
                    newNote.querySelector('.noteContent').contentEditable='false';
                    newNote.querySelector('.noteContent').textContent=storedInfo.text;
                    newNote.querySelector('.saveNote').style.display='none';
                    newNote.info = {
                        id: storedInfo.id,
                        text: storedInfo.text,
                        created: storedInfo.created,
                        modified: storedInfo.modified
                    };
                }
                newNote.querySelector('h4').textContent = "Note " + newNote.id;
                console.log(window.localStorage);
                container.appendChild(newNote);
            }
        }
    }
    ////////////////////////////EVENT HANDLER FOR EDITING AND DELETING///////////////////////////
    function noteEvents(note){
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
        //////////////////////////////////////EDIT NOTES///////////////////////////////////
        if(note.target.getAttribute('class')=="editNote"){
            content.setAttribute('contentEditable','true');
            saveButton.style.display="block";
            editButton.disabled='true';
            createButton.disabled='true';
        }
        //////////////////////////////////////SAVE CHANGES/////////////////////////////////////
        if(note.target.getAttribute('class')=="saveNote"){
            editButton.setAttribute('disabled','false');
            editButton.disabled='';
            createButton.disabled='';
            saveButton.style.display="none";
            content.setAttribute('contentEditable','false');
            if(!noteBody.info){
                noteBody.info = {
                    id: noteBody.id,
                    text: noteBody.querySelector('.noteContent').textContent,
                    created: new Date(),
                    modified: new Date()
                };
            }
            else {
                noteBody.info.modified = new Date();
                noteBody.info.text = content.textContent;
            }
            window.localStorage.setItem(noteBody.info.id,JSON.stringify(noteBody.info));
            console.log(window.localStorage);
        }
        //////////////////////////////////DELETE NOTES////////////////////////////////////
        if(note.target.getAttribute('class')=="deleteNote"){
            window.localStorage.removeItem(noteBody.info.id);
            //window.localStorage.clear();
            console.log(window.localStorage);
            container.removeChild(document.getElementById(noteBody.info.id));
        }
    }
})();