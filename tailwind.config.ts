/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // This will include all JS, TS, JSX, TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AA86", //old color ref from sts
        "primary-2": "#02A998", //new color for main header
        "primary-3": "#007468", //banner color
        "primary-4": "#F0FFF5", //bg for card container header
        "primary-5": "#f5fefd", //bg for address bg
        "text-green-1": "#01443F", //for
        "text-green-2": "#015850", //for main title
        "text-gray-1": "#4A5568",
        green: "#3EAF3F",
        "light-green": "#F3FFE8",
        "grey-1": "#778F9B",
      },
      gridTemplateColumns: {
        min1rem: "repeat(auto-fill,minmax(1rem,1fr))",
        min2rem: "repeat(auto-fill,minmax(2rem,1fr))",
        min3rem: "repeat(auto-fill,minmax(3rem,1fr))",
        min4rem: "repeat(auto-fill,minmax(4rem,1fr))",
        min5rem: "repeat(auto-fill,minmax(5rem,1fr))",
      },
      boxShadow: {
        "grow-sm": "0px 0px 3px 3px rgba(0, 0, 0, 0.05)",
        "grow-lg": "0px 0px 4px 4px rgba(0, 0, 0, 0.05)",
        "grow-cover-md": "1px 1px 2px 2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        fade: {
          "0%": { width: "0rem", textWrap: "nowrap", opacity: 0 },
          "20%": { opacity: 1 },
          "90%": { textWrap: "nowrap" },
          "100%": {
            width: "var(--fade-width, max-content)",
            whiteSpace: "normal",
          },
        },
        fadeSub: {
          "0%": { width: "0rem", textWrap: "nowrap", opacity: 0 },
          "20%": { opacity: 1 },
          "90%": { textWrap: "nowrap" },
          "100%": {
            width: "var(--fadeSub-width, max-content)",
            whiteSpace: "normal",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        fade: "fade 0.3s ease",
        fadeSub: "fadeSub 0.3s ease",
      },
      width: {
        "full-minus-200": "calc(100% - 200px)",
      },
    },
    // screens: {
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1440px) { ... }
    //   // '3xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    fontSize: {
      "3xs": "0.6rem",
      "2xs": "0.65rem",
      xxs: "0.7rem",
      xs: "0.75rem",
      sm: "0.8rem",
      sm1: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
      },
    },
  },
  // width: {
  //   'full-minus-200': 'calc(100% - 200px)',
  // },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".fade-width-xs": {
          "--fade-width": "4rem",
        },
        ".fade-width-sm": {
          "--fade-width": "8rem",
        },
        ".fade-width-md": {
          "--fade-width": "13.375rem",
        },
        ".fade-width-lg": {
          "--fade-width": "16rem",
        },
        ".fade-width-xl": {
          "--fade-width": "21.5rem",
        },
        ".fadeSub-width-xs": {
          "--fadeSub-width": "4rem",
        },
        ".fadeSub-width-sm": {
          "--fadeSub-width": "8rem",
        },
        ".fadeSub-width-md": {
          "--fadeSub-width": "12rem",
        },
        ".fadeSub-width-lg": {
          "--fadeSub-width": "16rem",
        },
        ".fadeSub-width-xl": {
          "--fadeSub-width": "20rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
