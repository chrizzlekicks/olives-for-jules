const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#fad3ff',
				secondary: '#fffdeb',
				tertiary: '#7aad7a',
			},
		},
	},
	plugins: [],
};
