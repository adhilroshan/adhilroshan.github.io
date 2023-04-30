/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				brunoace: ['Bruno Ace', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			},
			colors: {
				heroBg: 'rgb(112, 26, 117)'
			},
			backgroundImage: {
				'hero-pattern':
					'radial-gradient(at 1% 53%, rgb(249, 115, 22) 0, transparent 95%), radial-gradient(at 24% 84%, rgb(255, 255, 255) 0, transparent 61%), radial-gradient(at 14% 12%, rgb(51, 65, 85) 0, transparent 59%), radial-gradient(at 56% 94%, rgb(67, 56, 202) 0, transparent 42%), radial-gradient(at 94% 92%, rgb(251, 191, 36) 0, transparent 20%), radial-gradient(at 18% 5%, rgb(91, 33, 182) 0, transparent 55%)'
			}
		}
	},
	plugins: [require('prettier-plugin-tailwindcss')]
};
