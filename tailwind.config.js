/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-linear-gradient":
          "linear-gradient(0deg, rgba(4,0,77,1) 18%, rgba(0,28,136,1) 40%, rgba(0,17,85,0.73) 78%, rgba(0,0,0,0.38) 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-text-fill"), // Install this plugin
    require("tailwindcss-text-stroke"), // Optional for stroke gradients
  ],
};
