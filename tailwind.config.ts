import type {Config} from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'custom-radial':
					'radial-gradient(230.93% 230.93% at 102.01% 2.03%, #F9ED32 0%, #EE2A7B 36%, #D22A8A 44%, #8B2AB2 60%, #1B2AF0 83%, #002AFF 88%)',
			},
			boxShadow: {
				custom: '0 4px 50px rgba(0, 0, 0, 0.05)',
			},
			flex: {
				custom: '1 0 calc(33.333% - 60px)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				main: '#5BC4CB',
			},
		},
		screens: {
			sm: {max: '640px'},
			md: {max: '768px'},
			lg: {max: '1024px'},
			xl: {max: '1280px'},
		},
	},
	plugins: [],
} satisfies Config
