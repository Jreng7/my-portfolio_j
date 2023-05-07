const { thonUI, thonUIContent } = require('@thonlabs/ui/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', 'src/**/*.tsx', thonUIContent()],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'code': ['Courier Prime', 'monospace']
      },
    },
  },
  plugins: [thonUI()],
}

