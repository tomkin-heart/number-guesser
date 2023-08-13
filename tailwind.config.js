/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		spacing: {
			'40': '13rem',
			'30': '8rem',
			'20': '4rem',
			'10': '2rem',
			'DEFAULT': '1rem',
			'01': '0.5rem',
			'02': '0.25rem',
			'03': '0.125rem',
			'1': '1px',
			'0': '0px',
		},
		borderRadius: {
			'full': '9999px',
			'20': '4rem',
			'10': '2rem',
			'DEFAULT': '1rem',
			'01': '0.5rem',
			'02': '0.25rem',
			'03': '0.125rem',
		},
		colors: {
			transparent: 'transparent',
			bg: 'var(--bg)',
			sa: 'var(--sa)',
			ma: 'var(--ma)',
			fg: 'var(--fg)',
			active: 'var(--active)',
		},
		fontSize: {
			'30': ['var(--t30)', {lineHeight: '1.0'}],
			'20': ['var(--t20)', {lineHeight: '1.25'}],
			'10': ['var(--t10)', {lineHeight: '1.25'}],
			'00': ['var(--t00)', {lineHeight: '1.5'}],
			'01': ['var(--t01)', {lineHeight: '1.4'}],
		},
		screens: {
			tablet: {raw: '(min-width:700px) and (min-height:500px)'},
			desktop: {raw: '(min-width:1780px) and (min-height:1024px)'},
		},
		borderWidth: {
			0: '0',
			DEFAULT: '1px',
			2: '2px',
		},
	},
	plugins: [],
}
