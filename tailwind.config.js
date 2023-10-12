/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		fontFamily: {
			light: ["Acrom-Light"],
			regular: ["Acrom-Regular"],
			medium: ["Acrom-Medium"],
			bold: ["Acrom-Bold"],
			extraBold: ["Acrom-ExtraBold"],
		},
		extend: {
			colors: {
				"primary-color" : {
					500: "#E41D32",
					600: "#cb0e21"
				},
				"light": {
					500: "#E3E3E3",
					600: "#cecccc"
				},
				"success-color": "#99B24E",
				"danger-color": "#E84456",
				"dark-1": "#333232",
				"light-1": "#efefef",
				"light-2": "#A9A9A9",
				"light-3": "#F9F9FA",
				"light-4": "#9C9C9C",
			},
			keyframes: {
				line: {
					"0%": { width: 0 },
					"100%": { width: "100%" }
				},
				animation: {
					line: 'line 8.2s infinite'
				}
			}
		}
	}
}
