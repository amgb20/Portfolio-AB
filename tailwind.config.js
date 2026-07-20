/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#EAF4FF",
        "bg-alt": "#DBEAFB",
        surface: "#FFFFFF",
        ink: "#0F2742",
        "text-primary": "#12263A",
        "text-muted": "#55708A",
        "text-light": "#8AA0B5",
        accent: "#0284C7",
        "accent-light": "#38BDF8",
        "accent-subtle": "rgba(2, 132, 199, 0.10)",
        "border-subtle": "rgba(15, 39, 66, 0.08)",
        "border-warm": "rgba(2, 132, 199, 0.18)",
      },
      maxWidth: {
        content: "900px",
        wide: "1100px",
      },
      boxShadow: {
        soft: "0 0 0 1px rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        "soft-hover":
          "0 0 0 1px rgba(31, 58, 95, 0.14), 0 6px 16px -4px rgba(0, 0, 0, 0.12), 0 12px 28px -6px rgba(0, 0, 0, 0.10)",
      },
      keyframes: {
        staggerIn: {
          "0%": { opacity: "0", transform: "translateY(14px)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "stagger-in": "staggerIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scroll-bounce": "scrollBounce 1.8s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};
