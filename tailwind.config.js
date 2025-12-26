/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#221912',       // Main Background
          card: '#2C241B',     // Card Background
          input: '#1A120B',    // Darker inputs
          yellow: '#FDE047',   // yellow-300 (Primary Action)
          text: '#F3F4F6',     // Primary Text
          muted: '#9CA3AF',    // Secondary Text
        }
      }
    },
  },
  plugins: [],
}