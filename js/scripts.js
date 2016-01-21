
var puzzle = function(phrase) {
    phrase = phrase.replace(/[aeiou]/gi, '-');
    return phrase
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var puzzleInput = $("input#phrase").val();
    var puzzleOutput = puzzle(puzzleInput);
    $(".puzzleForm").hide();
    $("#showPuzzle").text(puzzleOutput);

    event.preventDefault();
  });
});
