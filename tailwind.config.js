module.exports = {
  content: [
    './_layouts/**/*.html',
    './_projects/**/*.md',
    './_posts/**/*.md',
    './index.md',
    './log.md',
  ],
  theme: {
    extend: {
      colors: { accent: '#d97706' },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
