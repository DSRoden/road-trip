/* gLobal geocode */

(function(){
  'use strict';

  $(document).ready(function(){
    $('button[type=submit]').click(addTrip);
  });

  function addTrip(e){
    var startPoint = $('#startPoint').val(),
        endPoint  =  $('#endPoint').val();

    geocode(startPoint, function(name, lat, lng){
      $('#startPoint').val(name);
      $('#lat1').val(lat);
      $('#lng1').val(lng);

      $('form').submit();
    });

    geocode(endPoint, function(name2, lat2, lng2){
      $('#endPoint').val(name2);
      $('#lat2').val(lat2);
      $('#lng2').val(lng2);

      $('form').submit();
    });

    e.preventDefault();
  }
})();

