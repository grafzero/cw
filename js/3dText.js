// effect from: https://codemyui.com/3d-hover-card/
// translated to vanilla js

var heading = document.getElementById('headerText');
window.onmousemove = function(e){

    var ax = -(window.innerWidth / 2 - e.pageX)/20;
    var ay = (window.innerHeight/2 - e.pageY)/10;
    heading.style.webkitTransform = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
    heading.style.MozTransform = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
    heading.style.msTransform = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
    heading.style.OTransform = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
    heading.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
};
