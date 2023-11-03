const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {},
		colors: {
			primary: {
				DEFAULT: 'var(--primary)'
			},
			light: {
				DEFAULT: 'var(--light)'
			},
			lightTint: {
				DEFAULT: 'var(--light-tint)'
			},
			black: 'var(--black)',
			white: 'var(--white)',
			gray: colors.neutral
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
