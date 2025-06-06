/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        xp: ['"Windows-XP-Tahoma"', "sans-serif"],
        helvetica: ['"Helvetica"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        primary:
          'url("/images/empty-white-grey-studio-backdrop-background.jpg")',
      },
      keyframes: {
        "fade-out-down": {
          "0%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "slide-in-top": {
          "0%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        // "flipy-down": {
        //   "0%": {
        //     transform: "translate3d(0, -100%, 0) rotateX(-180deg)",
        //   },
        //   "50%": {
        //     transform: "rotateX(-90deg)",
        //   },
        //   "100%": {
        //     transform: "translate3d(0, 0, 0) rotateX(0deg)",
        //   },
        // },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-in-out forwards",
        "fade-in": "fade-in 1s ease-in-out forwards",
        "fade-in-left": "fade-in-left 2s ease-in-out forwards",
        "fade-in-up-delay": "fade-in-up 1s ease-out forwards",
        "fade-in-delay": "fade-in 2s ease-out forwards",
        "fade-out": "fade-out 2s ease-out forwards",
        "fade-out-down": "fade-out-down 0.7s ease-out forwards",
        "fade-in-up-intro": "fade-in-up 2s ease-in-out forwards",
        "slide-in": "slide-in-top 4s ease-in-out forwards",
        "fade-in-intro": "fade-in 4s ease-in-out forwards",
        "fade-in-down": "fade-in-down 4s ease-in-out forwards",
        // "flipy-down": "flipy-down 0.3s  forwards",
      },
    },
  },
  plugins: [],
};
