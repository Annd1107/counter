
var i=0;
var too = document.getElementsByTagName('p')[0];
function prev(){
    i--;
    too.innerHTML = i;
}
function next(){
    i++;
    too.innerHTML = i;
}
function reset(){
    i=0;
    too.innerHTML = i;
}