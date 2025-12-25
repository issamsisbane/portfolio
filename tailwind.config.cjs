/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#007eff",
					"secondary": "#377cfb",
					"secondary-content": "#ffffff",
					"accent": "#007eff",
					"neutral": "#005dff",
					"base-100": "#ffffff",
				}
			},
			{
                dark: {
                    "primary": "#007eff",
                    "secondary": "#377cfb",
                    "secondary-content": "#ffffff",
                    "accent": "#007eff",
                    "neutral": "#005dff",
                    "base-100": "#1f2937",
                    "base-content": "#ffffff",
                }
            }
		],
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}
