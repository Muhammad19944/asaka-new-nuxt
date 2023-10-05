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
		},
		extend: {
			colors: {
				"primary-color" : {
					500: "#E41D32"
				},
			}
		}
	}
}
