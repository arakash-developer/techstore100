/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '401px',
        // '1xsm': '401px',
        'xxl': '992px',
        'custom4': '1320px',
        '1xl': '1400px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        custombuild: "url('/custombuild.png')",
        msiseries: "url('/msiseries.png')",
        msidesktop: "url('/msidesktop.png')",
        gamingmonitor: "url('/gamingmonitor.png')",
        details: "url('/detailsbg.png')",
      },
    },
  },
  plugins: [],
};
