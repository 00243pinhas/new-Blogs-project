// import flowbite from 'flowbite/plugin';


const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin') 
    flowbite.plugin(),
  ],
}

