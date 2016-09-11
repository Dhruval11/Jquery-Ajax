$(document).ready(function() {
  var a = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=v78af68npcrsptbbtgq49ws5&q=";
$('button').click(function() {
    var $inp = $('#inp').val();
    console.log($inp);
    $.ajax({
      url: a + $inp,
      dataType: 'jsonp',
      success: function(response) {
        console.log(response);
        $.each(response.movies, function(i, res) {
          $('#output').append('<p><img src="' + res.posters.thumbnail + '"/>' +" " +res.title + '</p>');
        });

      },
      error: function() {
        alert('data not recieved');
      }
    });
  });
});