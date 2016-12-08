describe("Hello world", function() {
  it("says hello", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
  it("contains world", function() {
    expect(helloWorld()).toContain("world");
  });
});
