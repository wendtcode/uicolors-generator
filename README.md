# 🎨 uicolors-generator

Generate a Tailwind CSS palette from a single color

## Install

```bash
pnpm add uicolors-generator chroma-js

pnpm add -D @types/chroma-js
```

## Usage

```typescript
import { getTailwindColors, getTailwindHsl } from "uicolors-generator";

// Default usage
const palette = getTailwindColors("#ff4f00");

console.log(palette);
// {
//   50: "32deg 100% 96%",
//   100: "34deg 100% 91%",
//   200: "31deg 100% 82%",
//   300: "30deg 100% 71%",
//   400: "26deg 100% 60%",
//   500: "23deg 100% 52%",
//   600: "19deg 100% 50%",
//   700: "15deg 98% 40%",
//   800: "13deg 87% 34%",
//   900: "13deg 83% 28%",
//   950: "11deg 89% 15%",
// }

// Passing `asHex: true` will return a hex palette
const hexPalette = getTailwindColors("#ff4f00", {
  asHex: true,
});

console.log(hexPalette);
// {
//   50: "#fff6ec",
//   100: "#ffecd3",
//   200: "#ffd4a5",
//   300: "#ffb56d",
//   400: "#ff8a32",
//   500: "#ff690a",
//   600: "#ff4f00",
//   700: "#cc3602",
//   800: "#a12b0b",
//   900: "#82260c",
//   950: "#461004",
// }

// Passing `includeDefault: true` will include the default
// color in the palette
const paletteWithDefault = getTailwindColors("#ff4f00", {
  includeDefault: true,
});

console.log(paletteWithDefault);
// {
//   50: "32deg 100% 96%",
//   100: "34deg 100% 91%",
//   200: "31deg 100% 82%",
//   300: "30deg 100% 71%",
//   400: "26deg 100% 60%",
//   500: "23deg 100% 52%",
//   600: "19deg 100% 50%",
//   700: "15deg 98% 40%",
//   800: "13deg 87% 34%",
//   900: "13deg 83% 28%",
//   950: "11deg 89% 15%",
//   DEFAULT: "19deg 100% 50%",
// }

// Passing `blackColor` and `whiteColor` will use those
// colors instead of the default black and white
const paletteWithBW = getTailwindColors("#ff4f00", {
  blackColor: "#27272a",
  whiteColor: "#fafafa",
});

console.log(paletteWithBW);
// {
//   50: "32deg 100% 96%",
//   100: "34deg 100% 91%",
//   200: "31deg 100% 82%",
//   300: "30deg 100% 71%",
//   400: "26deg 100% 60%",
//   500: "23deg 100% 52%",
//   600: "19deg 100% 50%",
//   700: "15deg 98% 40%",
//   800: "13deg 87% 34%",
//   900: "13deg 83% 28%",
//   950: "11deg 89% 15%",
//   black: "240deg 4% 16%",
//   white: "0deg 0% 98%",
// }

// If you just need the HSL channels for a single color...
const hsl = getTailwindHsl("#ff4f00");

console.log(hsl);
// "19deg 100% 50%"
```

## Tailwind config

You can use the `getTailwindColors` function to generate a palette and then use it in your Tailwind config.

```typescript
// tailwind.config.ts
import { getTailwindColors } from "uicolors-generator";

export default {
  theme: {
    extend: {
      colors: {
        steel: getTailwindColors("#232425", { includeDefault: true }),
        badass: getTailwindColors("#bada55", { includeDefault: true }),
      },
    },
  },
};
```

Then in your code, you can use your palette and shades like so:

```jsx
// your-project/pages/index.tsx
export default function HelloWorld() {
  return (
    <div className="bg-steel-800">
      <h1 className="text-badass">Hello World</h1>
      <p className="text-badass-300">Your palette at your fingertips.</p>
    </div>
  );
}
```
