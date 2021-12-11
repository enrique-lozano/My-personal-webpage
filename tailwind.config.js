const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			primary: {
				DEFAULT: 'var(--primary)',
			},
			light: {
				DEFAULT: 'var(--light)',
			},
			black: 'var(--black)',
			white: 'var(--white)',
			gray: colors.trueGray,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
