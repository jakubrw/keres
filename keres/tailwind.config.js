/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/flowbite-react/**/*.js',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [require('flowbite/plugin')],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'yellow-dark': '#F6CF1A',
				'yellow-light': '#FAE277',
				'green-dark': '#66C367',
				'green-light': '#92D669',
				'brown-light': '#CDAD8A',
				'brown-dark': '#A48465'
			},
		},
	},
	plugins: [],
}
