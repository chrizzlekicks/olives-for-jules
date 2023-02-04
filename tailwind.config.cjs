const defaultTheme = require('tailwindcss/defaultTheme');
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				ofj_s: '1.25rem',
				ofj_l: '1.625rem',
			},
			lineHeight: {
				ofj_s: '1.75rem',
				ofj_l: '2.75rem',
			},
			colors: {
				primary: '#fad3ff',
				secondary: '#fffdeb',
				tertiary: '#7aad7a',
				terhov: '#537A55',
				ofj_l: '#1A1A1A',
				ofj_s: '#1A1A1A',
				border: '#E5C2EA',
			},
		},
	},
	plugins: [iOSHeight],
};
