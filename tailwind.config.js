/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll var(--duration) linear infinite'
			},
			keyframes: {
				'infinite-scroll': {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-50% - var(--gap)/2))'
					}
				}
			}
		},
		fontFamily: {
			jbmono: ['JetBrains Mono', 'monospace']
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
