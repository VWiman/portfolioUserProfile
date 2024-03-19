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
					50: "#f4f7f7",
					100: "#e3eae9",
					200: "#cad7d7",
					300: "#a4bcbc",
					400: "#789798",
					500: "#5d7c7d",
					600: "#4f686b",
					700: "#455759",
					800: "#3d4b4d",
					900: "#353f41",
					950: "#21292b",
				},
				"dark-pea": {
					950: "#2d3334",
				},
			},
		},
	},
	plugins: [],
};
