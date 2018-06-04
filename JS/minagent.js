// Title
const nom = document.querySelector('.name');
const line = document.querySelector('.point');
const wrap = document.querySelector('.wrap');
const by = document.querySelector('.Buy');
const rnt = document.querySelector('.Rent');


$(by).click(function(){
    $('#defaultOpen').css('background-color','rgb(114,170,161)');
    $('#hah').css('background-color','transparent');
    $('#Rent').css('display','none');
    $('#Buy').css('display','block');

});
$(rnt).click(function(){
    $('#hah').css('background-color','rgb(114,170,161)');
    $('#defaultOpen').css('background-color','transparent')
    $('#Buy').css('display','none');
    $('#Rent').css('display','block');
});



setTimeout(function(){
line.classList.add("add");
}, 500);
setTimeout(function(){
line.classList.add("add2");
}, 2500);

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
// Buy & Let Selector

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


const one = document.querySelectorAll('.one .img-fluid');
// Reset Carousel after use

// thumbnail
var taza = '';
var indx = '';
var test = '';
var str2 = '';
var res = '';

// carousel
var slid = '';

$('#content').on('click', '.one', function() {
  indx = $(this).index(".one");
  $("#exampleModal img").attr("src", one[indx].src);
  taza = document.querySelectorAll('#exampleModal .modal-footer .img-fluid');
  slid = document.querySelectorAll('#exampleModal .carousel-inner .w-100');
  for (i = 0; i < taza.length; i++) {
      test = taza[i].src.split('');
      str2 = test.slice(0, -5).join('');
    var rest = [i]+'.jpg';
    res = str2.concat(rest);
    taza[i].src = res;
    slid[i].src = res;
  }
  $('#carousel-example-1z').carousel(0);
});

var caro = '';
// -----------------------------
$('.tabcontent').on('click', '.w-100', function() {
  indx = $(this).index(".w-100");
  caro = document.querySelectorAll('.tabcontent .w-100');
  taza = document.querySelectorAll('#exampleModal .modal-footer .img-fluid');
  slid = document.querySelectorAll('#exampleModal .carousel-inner .w-100');
  $("#exampleModal img").attr("src", caro[indx].src);
  for (i = 0; i < taza.length; i++) {
      test = taza[i].src.split('');
      str2 = test.slice(0, -5).join('');
    var rest = [i]+'.jpg';
    res = str2.concat(rest);
    taza[i].src = res;
    slid[i].src = res;
  }
   $('#carousel-example-1z').carousel(0);
});
