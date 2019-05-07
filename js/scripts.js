$(document).ready(function(){
  $("#amazing").submit(function(event){
    event.preventDefault();
    var everInput = $("input#ever").val();
    var earthInput = $("input#earth").val();
    var feelingInput = $("input#feeling").val();
    var minuteInput = $("input#minute").val();

    var arrayOne = [everInput, earthInput, feelingInput, minuteInput];
    var arrayTwo = [];
    arrayTwo.push(arrayOne[1],arrayOne[0],arrayOne[2],arrayOne[3]);
    $("#things").show();
    $("#item1").text(arrayTwo[0]);
    $("#item2").text(arrayTwo[1]);
    $("#item3").text(arrayTwo[2]);
    $("#item4").text(arrayTwo[3]);
  });
});
