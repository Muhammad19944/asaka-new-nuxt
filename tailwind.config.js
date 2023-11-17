/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-mode="dark"]'],
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
				"dark-2": "#2F2F2F",
				"light-1": "#efefef",
				"light-2": "#A9A9A9",
				"light-3": "#F9F9FA",
				"light-4": "#9C9C9C",
				"light-5": "#EDEDEE",
				"light-6": "#bebdbe",
			},
			keyframes: {
				line: {
					"0%": { width: 0 },
					"100%": { width: "100%" }
				},
				animation: {
					line: 'line 8.2s infinite'
				}
			},
			boxShadow: {
				"shadow-1": "0 0 14px rgba(0, 0, 0, 0.1)",
				"shadow-2": "0 0 26px rgba(0, 0, 0, 0.1)",
				"shadow-3": "0 4px 4px rgba(0, 0, 0, 0.25)",
			}
		}
	}
}
