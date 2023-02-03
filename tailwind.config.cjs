const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				ofj: '1.625rem',
			},
			lineHeight: {
				ofj: '2.75rem',
			},
			colors: {
				primary: '#fad3ff',
				secondary: '#fffdeb',
				tertiary: '#7aad7a',
				terhov: '#537A55',
				ofj: '#1A1A1A',
			},
		},
	},
	plugins: [],
};
