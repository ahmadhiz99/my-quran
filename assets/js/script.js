$.getJSON("https://api-alquranid.herokuapp.com/surah", function(data){

    function set(){
        sessionStorage.setItem('key','as');
    }

    var j=1;

    $.each(data.data, function(i, data){
        $('#list-surah').append('<div class="col-lg-2 col-md-3 col-6 mb-3"><a onClick="sessionStorage.somekey = '+ data.nomor +'; console.log(sessionStorage.somekey);" data-fajax="false" href="detail-surah.html" data-transition="slidefade" class="text-decoration-none text-dark"><div class="card"><div class="card-body"><h6>'+ data.nomor +'. '+ data.nama+'</h6></div></div></a></div>');
    });
    

});


let data = sessionStorage.getItem('somekey');
// console.log(data);
$.getJSON("https://api-alquranid.herokuapp.com/surah/"+data, function(data){
    console.log(data.data[1]);

    $.each(data.data, function(i, data){
        $('#body-detail-surah').append('<div class="mb-5"><h6 class="text-center fs-4 fw-bolder">'+ data.ar+'</h6><p class="mt-3 text-center">'+ data.tr +'</p></div>');
    });
    

});