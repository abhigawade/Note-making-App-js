const container = document.querySelector('.notes-container');
const btn = document.querySelector('#btn');
const note = document.querySelectorAll('.input-box');

function shownotes(){
    container.innerHTML = localStorage.getItem('note');
}
shownotes();

function savedata(){
    localStorage.setItem('note',container.innerHTML);
}


btn.addEventListener('click',function(){
    let input = document.createElement('p');
    let img = document.createElement('img');
    input.className = 'input-box';
    input.setAttribute('contenteditable','true');
    img.src = 'img/delete.png';
    container.appendChild(input).appendChild(img);

})

container.addEventListener('click',function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        savedata();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                savedata();
            }
        });

    }
})

