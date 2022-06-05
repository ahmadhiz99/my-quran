$.getJSON("https://api-alquranid.herokuapp.com/surah", function(data){

    console.log(data.data);

    function set(){
        sessionStorage.setItem('key','as');
    }

    var j=1;

    $.each(data.data, function(i, data){
        $('#list-surah').append('<div class="col-lg-2 col-md-3 col-6"><a onClick="sessionStorage.somekey = parseInt(data.nomor); console.log(sessionStorage.somekey);" data-fajax="false" href="detail-surah.html" data-transition="slidefade" class="text-decoration-none text-dark"><div class="card"><div class="card-body"><h6>'+ data.nama +''+ data.nomor+'</h6></div></div></a></div>');
        console.log(data.nomor);
     
    })
    

});