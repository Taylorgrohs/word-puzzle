describe("puzzle", function(phrase) {
  it("will target and replace vowels with -", function() {
    expect(puzzle("hello")).to.equal("h-ll-");
  });
});
