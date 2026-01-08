var askstate =prompt('Type Something!')
var box = document.getElementById('box')
var stateText = document.createTextNode(askstate)
box.appendChild(stateText);

function raw(){
    box.style.backgroundColor = '';
    box.style.border = '';
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = '';
}
function bgcolor(){
    box.style.backgroundColor = 'grey';
    box.style.border = '2px solid black';
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = '';
}
function block(){ 
    box.style.backgroundColor = "";
    box.style.border = "";
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = 'uppercase';
}
function small(){
    box.style.backgroundColor = "";
    box.style.border = "";
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = 'lowercase';
}
function bold(){
    box.style.backgroundColor = "";
    box.style.border = "";
    box.style.fontStyle = '';
    box.style.textTransform = '';
    box.style.textDecoration = '';
    box.style.fontWeight = '700';
}
function italic(){
    box.style.backgroundColor = "";
    box.style.border = "";
    box.style.textTransform = '';
    box.style.fontWeight = '';
    box.style.textDecoration = '';
    box.style.fontStyle = 'italic';
}
function underline(){
    box.style.backgroundColor = "";
    box.style.border = "";
    box.style.textTransform = '';
    box.style.fontWeight = '';
    box.style.fontStyle = '';
    box.style.textDecoration = 'underline'
}