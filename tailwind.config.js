/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    // all directories and extensions will correspond to your Nuxt config
    "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/plugins/**/*.{js,ts,mjs}",
    "{srcDir}/composables/**/*.{js,ts,mjs}",
    "{srcDir}/utils/**/*.{js,ts,mjs}",
    "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/app.config.{js,ts,mjs}",
    "{srcDir}/app/spa-loading-template.html"
  ],

  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        clash: "Clash Display, sans-serif", // Add Clash Display as a custom font
        subjectivity: "Subjectivity, serif", // Add Clash Display as a custom font
        outfit: "Outfit, serif", // Add Clash Display as a custom font
      },
      fontStyle: {
        italic: 'italic', // Ensure italics are included
      },
      fontWeight: {
        regular: '400',
        bold: '700',
        extrabold: '900',
      },
      colors: {
        "primary": '#FFFAE5',
        "button": "#FAC97A",
        "customcolor": "#B1B1B1"
      },
      borderRadius: {
        custom1: '9px', // Add a custom border radius
        custom2: '3.5px', // Add a custom border radius,
        custom3: '39.99px',
        custom4: '16.66px'
      },
    },
    

  },
  plugins: [],
}

