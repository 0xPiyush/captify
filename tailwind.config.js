/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				light: "#fffbeb",
				"light-secondary": "#fef3c7",
				"light-accent": "#fbbf24",
				"light-text": "#4b5563",
				"light-text-secondary": "#6b7280",
				"light-selection": "#fde68a"
			}
		}
	},
	plugins: []
};
