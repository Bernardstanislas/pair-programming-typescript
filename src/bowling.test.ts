import {Bowling} from "./bowling";

describe("Bowling", () => {
  it("handles a very boring game", () => {
    const bowling = new Bowling();

    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }

    expect(bowling.getScore()).toBe(0);
  });

});
