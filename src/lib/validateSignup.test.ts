import { describe, it, expect } from "vitest";
import { validateSignup } from "./validateSignup";

const valid = {
  fullName: "Aliya Nurlanovna",
  email: "aliya@example.com",
  tickets: "2",
};

describe("validateSignup", () => {
  it("returns no errors for valid values", () => {
    expect(validateSignup(valid, 10)).toEqual({});
  });

  it("rejects 0 tickets", () => {
    const errors = validateSignup({ ...valid, tickets: "0" }, 10);
    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("rejects 5 tickets", () => {
    const errors = validateSignup({ ...valid, tickets: "5" }, 10);
    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("rejects 1.5 tickets", () => {
    const errors = validateSignup({ ...valid, tickets: "1.5" }, 10);
    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("accepts 4 tickets", () => {
    expect(validateSignup({ ...valid, tickets: "4" }, 10)).toEqual({});
  });

  it("rejects more tickets than seats left", () => {
    const errors = validateSignup({ ...valid, tickets: "3" }, 2);
    expect(errors.tickets).toBe("Only 2 seats left");
  });
});