//add item in list
$(document).ready(function() {
  $("#grabMe").click(function() {
    var newItem = $("#item").val();
    var newQuantity = $("#quantity").val();
    $("#item").val("");
    $("#quantity").val("");
    if (newItem != "" && newQuantity != "") {
      $("tbody").append(
        "<tr><td>" +
          newItem +
          "</td><td>" +
          newQuantity +
          "</td><td><i class='fas fa-trash skipMe'></i></td></tr>"
      );
    } else if (newItem == "" && newQuantity == "") {
      alert("Item and quantity not provided");
    } else if (newItem == "") {
      alert("Item not provided");
    } else if (newQuantity == "") {
      alert("Quantity not provided");
    }
  });
});

$(document).ready(function() {
  $("tbody").on("click", ".skipMe", function(event) {
    $(this)
      .parent()
      .parent()
      .fadeOut(500, function() {
        $(this.parent).remove();
      });
  });
});
