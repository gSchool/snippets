$(document).ready(function(){
  var $body = $('body');
  console.log($body);

  var $aSuperInput = $('<input>').addClass('super').attr('id','sean');
  $body.append($aSuperInput);

  var myChar;
  $($aSuperInput).keypress(function(event){
    myChar = String.fromCharCode(event.which);
    $body.append(myChar);
  });

});
