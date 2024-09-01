/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			manrope: ['Manrope', 'sans-serif'],
			jbmono: ['JetBrains Mono', 'monospace']
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
