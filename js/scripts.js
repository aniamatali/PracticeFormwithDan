$(document).ready(function() {
  $("#letter").submit(function(event) {
    var nameInput = $("input#friends-name").val().toUpperCase();

    $("title").text("Letter To " + nameInput);
    $(".friends-name").text(nameInput);
    $("#show-letter").show();

    event.preventDefault();
  });
});
