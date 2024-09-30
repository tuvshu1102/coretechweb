/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["tt_octosquares", "sans-serif"],
        boldocto: ["tt_octosquares_bold", "sans-serif"],
      },
      spacing: {
        "200px": "200px", // Define custom width for item width
      },
      animation: {
        scrollLeft: "scrollLeft 30s linear infinite", // Define the animation with timing
        scroll: "scroll 10s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        marquee: "marquee 15s linear infinite",
        scrollwheel: "scrollwheel 2s linear infinite",
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        bounce: "bounceUpDown 1.5s ease-in-out infinite",
      },
      keyframes: {
        scrollLeft: {
          to: { left: "-100px" }, // Define the scrollLeft keyframes
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollwheel: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        bounceUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-13px)" },
        },
        marquee: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        topdark:
          "linear-gradient(to left, rgba(255, 255, 255, 8), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
        datashit: "linear-gradient(to bottom, #5A807C,#30453D)",
        top1: "linear-gradient(to right, #ffffff00, #ffffff10)",
        head1: "linear-gradient(to bottom, rgb(0,0,0), rgb(0,0,0,0.1))",
        dehead1:
          "linear-gradient(to bottom, rgb(255,255,255), rgb(255,255,255,0.1))",
        head2:
          "linear-gradient(to right, #5A807C, white, white, white, #EF5239)",
        darkhead2:
          "linear-gradient(to right, #5A807C, black, black, black, #EF5239)",
        head3: "linear-gradient(to right, #5A807C, white, white, #EF5239)",
        info1:
          "linear-gradient(to bottom, white, white, white, #243332), linear-gradient(-45deg, #5A807C, white, white, white, white, #243332)",
        six1: "linear-gradient(to right bottom, #151515, #151515, #5f2921)",
        six2: "linear-gradient(to right bottom, #151515, #5f2921)",
        six3: "linear-gradient(to right top, #5f2921, #151515)",
        six4: "linear-gradient(to right, #151515, #151515, #151515, #5f2921)",
        desix1:
          "linear-gradient(to right bottom, #5A807C, #5A807C, #5A807C, rgba(239, 82, 57, 0.8))",
        desix2:
          "linear-gradient(to right bottom, #5A807C,#5A807C, rgba(239, 82, 57, 0.8))",
        desix3:
          "linear-gradient(to right top, rgba(239, 82, 57, 0.6), #5A807C, #5A807C, #5A807C)",
        desix4: "linear-gradient(to right, #5A807C, #5A807C, #5A807C, #5A807C)",
        mbsix1: "linear-gradient(to bottom, #151515, #151515, #151515,#5f2921)",
        mbsix2: "linear-gradient(to bottom, #151515, #5f2921)",
        mbsix3: "linear-gradient(to bottom, #5f2921)",
        mbsix4: "linear-gradient(to top, #5f2921)",
        mbsix5: "linear-gradient(to top, #151515, #5f2921)",
        mbsix6: "linear-gradient(to top, #151515, #151515, #151515, #5f2921)",
        dembsix1:
          "linear-gradient(to bottom, #5A807C, #5A807C, #5A807C,#9B6C5F)",
        dembsix2: "linear-gradient(to bottom, #5A807C, #9B6C5F)",
        dembsix3: "linear-gradient(to bottom, #9B6C5F)",
        dembsix4: "linear-gradient(to top, #9B6C5F)",
        dembsix5: "linear-gradient(to top, #5A807C, #9B6C5F)",
        dembsix6: "linear-gradient(to top, #5A807C, #5A807C, #5A807C, #9B6C5F)",
        quote1: "linear-gradient(to bottom, white, #243332)",
        quote2: "linear-gradient(to bottom, #1E1E1E, #2B3433)",
        dequote2: "linear-gradient(to bottom, #F2F2F2, #C7D2D1)",
        data1: "linear-gradient(to bottom, #EF5239, #F8B8AE)",
        data2: "linear-gradient(to right bottom, #292929, #5A807C)",
        data3:
          "linear-gradient(to bottom, rgba(133, 71, 246, 0.16), rgba(255, 255, 255, 0.69), rgba(255, 255, 255, 0.24), rgba(133, 71, 246, 0.16))",
        dedata3:
          "linear-gradient(to bottom, rgba(133, 71, 246, 0.16), black, rgba(133, 71, 246, 0.16))",
        footer1: "url(/logos.png)",
        mouse: "0 0 20px rgba(242, 115, 96, 0.6)",
      },
      backgroundSize: {
        top2: "64px 100%",
      },
    },
  },
};
