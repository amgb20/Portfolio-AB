module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        primary: ["DM Sans", "sans-serif"],
      },
      colors: {
        "bg-primary": "#0F172A",
        "bg-card": "#1E293B",
        "bg-elevated": "#334155",
        "border-subtle": "#334155",
        "text-primary": "#F8FAFC",
        "text-muted": "#94A3B8",
        "accent-cyan": "#22D3EE",
        "accent-green": "#22C55E",
        "light-content": "#94A3B8",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#F8FAFC",
        "dark-mode": "#0F172A",
        "dark-card": "#1E293B",
        "green-text": "#22C55E",
        "greenbg": "#14532D",
      },
    },
  },
  plugins: [],
};
