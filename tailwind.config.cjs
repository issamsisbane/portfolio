/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
		daisyui: {
			themes: [
				{
					light: {
						// Couleurs principales - Bleus éclatants
						"primary": "#287fdcff",
						"primary-content": "#ffffff",
						
						"secondary": "#377cfb",
						"secondary-content": "#ffffff",
						
						"accent": "#99cbff",          // Bleu ciel pour contraster
						"accent-content": "#ffffff",
						
						"neutral": "#64748b",          // Gris-bleu neutre
						"neutral-content": "#ffffff",
						
						// Bases - Gris très clairs
						"base-100": "#ffffff",
						"base-200": "#e9eef3ff",
						"base-300": "#e5eaf1ff",
						"base-content": "#293852ff",
						
						// États - Couleurs sémantiques
						"info": "#3b82f6",             // Bleu info
						"info-content": "#ffffff",
						
						"success": "#10b981",          // Vert succès
						"success-content": "#ffffff",
						
						"warning": "#f59e0b",          // Orange warning
						"warning-content": "#ffffff",
						
						"error": "#ef4444",            // Rouge erreur
						"error-content": "#000e19ff",
					}
				},
				{
					dark: {
						// Couleurs principales - Mêmes bleus mais adaptés au dark
						"primary": "#0ea5e9",          // Un peu plus clair pour le dark
						"primary-content": "#ffffff",
						
						"secondary": "#377cfb",        // Plus clair pour contraster
						"secondary-content": "#ffffff",
						
						"accent": "#99cbff",           // Cyan éclatant
						"accent-content": "#0f172a",
						
						"neutral": "#475569",          // Gris-bleu foncé
						"neutral-content": "#e2e8f0",
						
						// Bases - Gris foncés
						"base-100": "#0f172a",  // Slate 900
						"base-200": "#1e293b",  // Slate 800
						"base-300": "#1e293b",  // Gray 700 - alternative neutre
						"base-content": "#e2e8f0",
						
						// États - Couleurs sémantiques adaptées
						"info": "#60a5fa",
						"info-content": "#0f172a",
						
						"success": "#34d399",
						"success-content": "#0f172a",
						
						"warning": "#fbbf24",
						"warning-content": "#0f172a",
						
						"error": "#f87171",
						"error-content": "#0f172a",
					}
				}
			],
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}
