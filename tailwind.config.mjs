/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  'blue-one': '#083dd1',
			  'blue-one-hover': '#4b2d7c'
			},
		},
	},
	plugins: [],
}
