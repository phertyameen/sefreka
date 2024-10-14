/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "premium-background": "linear-gradient(205.36deg, #FFF0B6 3.87%, #421196 96.24%)",
        "custom-gradient":
          "linear-gradient(199.78deg, #4C1FA1 0.88%, #795CD0 100%)",
        "side-nav-gradient":
          "linear-gradient(260.46deg, #421196 0%, #795CD0 100%)",
        "progress-gradient":
          "linear-gradient(180deg, #421196 0%, #795CD0 100%)",
        "custum-backdrop-filter": "blur(74.6693115234375px)",
        "background-frame": "linear-gradient(180deg, #6A47C0 0%, #FFFFFF 100%)",
        "header-background":
          "linear-gradient(180deg, #6A47C0 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        "custum-box-shadow": "0px 2.99px 2.99px 0px #5825B040",
        "yellow-box-shadow": "2.99px 2.99px 8.96px 0px #FFF0B6 inset",
        "white-box-shadow": "2.99px 2.99px 8.96px 0px #FFFFFF inset",

        // "yellow-box-shadow": "2.99px 2.99px 8.96px 0px #FFDD551A",
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
};
