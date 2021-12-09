var display = document.querySelector("#display");

/*


      
      JAVASCRIPT EVAL();
      
      untuk mengeksekusi valu display

author Ahmad

MIT License

Copyright (c) 2021 DVL_NOOB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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

	
