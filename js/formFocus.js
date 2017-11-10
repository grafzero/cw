// scrolls do bottom on page while using form

var elems = document.querySelectorAll(".cfinputs");
console.log(elems.length);
for (var i=0, len=elems.length; i < len; i++) elems[i].onkeypress= f;
for (var i=0, len=elems.length; i < len; i++) elems[i].onfocus= f;

function f(){
    window.scrollTo(0, document.body.scrollHeight);
}



