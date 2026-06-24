import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
  address: null,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("person address is defined", () => {
    expect(person.address).toBeNaN();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});