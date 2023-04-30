const { thonUI, thonUIContent } = require('@thonlabs/ui/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', thonUIContent()],
  jit: true,
  theme: {
    extend: {},
  },
  plugins: [thonUI()],
}

