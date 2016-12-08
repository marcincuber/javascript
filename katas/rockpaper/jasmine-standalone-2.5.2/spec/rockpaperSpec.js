describe("gameFunc", function() {
  it("returns draw", function() {
    expect(gameFunc("rock","rock")).toEqual("draw");
  });
  it("returns win", function() {
    expect(gameFunc("paper","rock")).toEqual("Paper Wins");
  });
  it("returns rock win", function() {
    expect(gameFunc("rock","scissors")).toEqual("Rock Wins");
  });
  it("returns invalid entry", function() {
    expect(gameFunc("asda","asdas")).toEqual("Your Entry Was Invalid");
  });
});
