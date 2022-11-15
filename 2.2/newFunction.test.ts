import { myFunction } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction({ myNum: 5 })).toBe("true");
  });
  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction({ myNum: 1 })).toBe("false");
  });
  it("returns the word 'big' if I pass in a number greater than 5", () => {
    expect(myFunction({ myNum: 100 })).toBe("big");
  });
  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction({ myNum: -1 })).toBe("negative");
  });
});
