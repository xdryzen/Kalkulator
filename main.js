var display = document.querySelector("#display");

/*


      
      JAVASCRIPT EVAL();
      
      untuk mengeksekusi valu display


    author Ahmad

*/


var satu = document.querySelector("#satu");
var dua = document.querySelector("#dua");
var tiga = document.querySelector("#tiga");
var empat = document.querySelector("#empat");
var lima = document.querySelector("#lima");
var enam = document.querySelector("#enam");
var tuju = document.querySelector("#tujuh");
var delapan = document.querySelector("#delapan")
var sembilan = document.querySelector("#sembilan");
var nol = document.querySelector("#nol");
var hasil = document.querySelector("#hasil");

satu.addEventListener("click", function (){
	display.value+="1";});
dua.addEventListener("click", function (){
	display.value+="2";});
tiga.addEventListener("click", function (){
	display.value+="3";});
empat.addEventListener("click", function (){
	display.value+="4";});
lima.addEventListener("click", function (){
	display.value+="5";});
enam.addEventListener("click", function (){
	display.value+="6";});
tujuh.addEventListener("click", function (){
	display.value+="7";});
delapan.addEventListener("click", function (){
	display.value+="8";});
sembilan.addEventListener("click", function (){
	display.value+="9";});
nol.addEventListener("click", function (){
	display.value+="0";});
hasil.addEventListener("click", function (){
	display.value = eval(display.value);
	});
	
var field = document.createElement('input');
field.setAttribute('type', 'text');
document.body.appendChild(field);

setTimeout(function() {
    field.focus();
    setTimeout(function() {
        field.setAttribute('style', 'display:none;');
    }, 50);
}, 50);

	