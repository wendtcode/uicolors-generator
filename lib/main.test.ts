import { expect, test } from "vitest";
import { getTailwindColors } from "./main";

test("works", () => {
  expect(getTailwindColors("#ff4f00")).toEqual({
    50: "32deg 100% 96%",
    100: "34deg 100% 91%",
    200: "31deg 100% 82%",
    300: "30deg 100% 71%",
    400: "26deg 100% 60%",
    500: "23deg 100% 52%",
    600: "19deg 100% 50%",
    700: "15deg 98% 40%",
    800: "13deg 87% 34%",
    900: "13deg 83% 28%",
    950: "11deg 89% 15%",
    black: "0deg 0% 0%",
    white: "0deg 0% 100%",
  });

  expect(
    getTailwindColors("#ff4f00", {
      whiteColor: "#fafafa",
      blackColor: "#27272a",
    })
  ).toEqual({
    50: "32deg 100% 96%",
    100: "34deg 100% 91%",
    200: "31deg 100% 82%",
    300: "30deg 100% 71%",
    400: "26deg 100% 60%",
    500: "23deg 100% 52%",
    600: "19deg 100% 50%",
    700: "15deg 98% 40%",
    800: "13deg 87% 34%",
    900: "13deg 83% 28%",
    950: "11deg 89% 15%",
    black: "240deg 4% 16%",
    white: "0deg 0% 98%",
  });

  expect(getTailwindColors("#ff4f00", { asHex: true })).toEqual({
    50: "#fff6ec",
    100: "#ffecd3",
    200: "#ffd4a5",
    300: "#ffb56d",
    400: "#ff8a32",
    500: "#ff690a",
    600: "#ff4f00",
    700: "#cc3602",
    800: "#a12b0b",
    900: "#82260c",
    950: "#461004",
    black: "#000000",
    white: "#ffffff",
  });
});
