/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'move-left': 'move-left 1s linear infinite'
			},
			keyframes: {
				'move-left': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-50%)'
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
