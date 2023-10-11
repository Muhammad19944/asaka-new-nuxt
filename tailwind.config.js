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
					500: "#E41D32"
				},
				"success-color": "#99B24E",
				"danger-color": "#E84456",
				"dark-1": "#333232",
				"light-1": "#efefef",
				"light-2": "#A9A9A9",
				"light-3": "#F9F9FA",
				"light-4": "#9C9C9C",
			}
		}
	}
}
