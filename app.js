var askstate =prompt('Type Something!')
var box = document.getElementById('text')
var stateText = document.createTextNode(askstate)
text.appendChild(stateText);

function raw(){
    box.style.backgroundColor = '';
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = '';
}
function bgcolor(){
    box.style.backgroundColor = 'silver';
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = '';
}
function block(){ 
    box.style.backgroundColor = "";
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = 'uppercase';
}
function small(){
    box.style.backgroundColor = "";
    box.style.textDecoration = '';
    box.style.fontStyle = '';
    box.style.fontWeight = '';
    box.style.textTransform = 'lowercase';
}
function bold(){
    box.style.backgroundColor = "";
    box.style.fontStyle = '';
    box.style.textTransform = '';
    box.style.textDecoration = '';
    box.style.fontWeight = '700';
}
function italic(){
    box.style.backgroundColor = "";
    box.style.textTransform = '';
    box.style.fontWeight = '';
    box.style.textDecoration = '';
    box.style.fontStyle = 'italic';
}
function underline(){
    box.style.backgroundColor = "";
    box.style.textTransform = '';
    box.style.fontWeight = '';
    box.style.fontStyle = '';
    box.style.textDecoration = 'underline'
}
