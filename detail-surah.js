
let data = sessionStorage.getItem('somekey');
// console.log(data);
$.getJSON("https://api-alquranid.herokuapp.com/surah/", function(data){

    console.log(data);

});