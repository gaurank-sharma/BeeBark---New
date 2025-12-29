// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           bg: '#221912',       // Main Background
//           card: '#2C241B',     // Card Background
//           input: '#1A120B',    // Darker inputs
//           yellow: '#FDE047',   // yellow-300 (Primary Action)
//           text: '#F3F4F6',     // Primary Text
//           muted: '#9CA3AF',    // Secondary Text
//         }
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. This is crucial: It allows you to toggle modes manually using the 'dark' class
  darkMode: 'class', 
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Renamed 'bg' to 'primary' because this color is used for:
          // - Background in Dark Mode
          // - Text in Light Mode
          primary: '#221912',   
          
          card: '#2C241B',      // Dark mode card background
          input: '#1A120B',     // Dark mode input background
          yellow: '#FDE047',    // Highlight/Accent
          muted: '#9CA3AF',     // Muted text
          
          // Added a light gray for subtle light-mode backgrounds
          light: '#F9FAFB',     
        }
      }
    },
  },
  plugins: [],
}