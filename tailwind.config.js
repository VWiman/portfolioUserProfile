/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				pea: {
					50: "#f6f7f6",
					100: "#e1e6e1",
					200: "#c3ccc3",
					300: "#9dab9e",
					400: "#788979",
					500: "#5e6e60",
					600: "#505e52",
					700: "#3e4740",
					800: "#343b36",
					900: "#2e332f",
					950: "#171c17",
				},
				"dark-pea": {
					950: "#121C16",
				},
			},
		},
	},
	plugins: [],
};
