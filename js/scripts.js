var gallonToLiter = function(gallons) {
  return gallons * 3.785411784;
};

var literToGallon = function(liters) {
  return liters / 3.785411784;
};

var peckToBushel = function(pecks) {
  return pecks / 4;
};

var bushelToPeck = function(bushels) {
  return bushels * 4;
};

//Interface logic

$(document).ready(function() {
  $("form#g-to-l").submit(function(event){
    event.preventDefault();
    var gallons = parseFloat($("#gallon").val());
    $("#litersOut").text(gallonToLiter(gallons));
  });
  $("form#l-to-g").submit(function(event){
    event.preventDefault();
    var liters = parseFloat($("#liter").val());
    $("#gallonsOut").text(literToGallon(liters));
  });
  $("form#p-to-b").submit(function(event){
    event.preventDefault();
    var pecks = parseFloat($("#peck").val());
    $("#bushelsOut").text(peckToBushel(pecks));
  });
  $("form#b-to-p").submit(function(event){
    event.preventDefault();
    var bushels = parseFloat($("#bushel").val());
    $("#pecksOut").text(bushelToPeck(bushels));
  });
});
