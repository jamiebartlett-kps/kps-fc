/** @type {import('tailwindcss').Config} */

const pxToRem = (px) => `${px / 16}rem`;

module.exports = {
  content: [
    './layout/*.liquid',
    './templates/**/*.liquid',
    './templates/**/*.json',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      // Override spacing (for p-*, m-*, gap-*, etc.) to use fixed pixel values
      spacing: {
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',   // this makes h-6 = 24px
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
      },

      // Make height classes match spacing
      height: theme => ({
        ...theme('spacing'),
        auto: 'auto',
        full: '100%',
        screen: '100vh',
      }),

      // Make width classes match spacing
      width: theme => ({
        ...theme('spacing'),
        auto: 'auto',
        full: '100%',
        screen: '100vw',
      }),

      // Optional: max-width scale
      maxWidth: {
        xs: '320px',
        sm: '384px',
        md: '448px',
        lg: '512px',
        xl: '576px',
        '2xl': '672px',
        '3xl': '768px',
        '4xl': '896px',
        '5xl': '1024px',
        '6xl': '1152px',
        full: '100%',
      },

      // Optional: font sizes (base 16px)
      fontFamily: {
        heading: 'var(--font-heading-family)',
        body: 'var(--font-body-family)',
      },

      fontWeight: {
        heading: 'var(--font-heading-weight)',
        body: 'var(--font-body-weight)',
      },

      fontStyle: {
        heading: 'var(--font-heading-style)',
        body: 'var(--font-body-style)',
      },

      // Typography scale
      fontSize: {
        // Headings (h1–h12)
        h1: ['48px', { lineHeight: '56px' }],
        h2: ['40px', { lineHeight: '48px' }],
        h3: ['36px', { lineHeight: '44px' }],
        h4: ['32px', { lineHeight: '40px' }],
        h5: ['28px', { lineHeight: '36px' }],
        h6: ['24px', { lineHeight: '32px' }],
        h7: ['22px', { lineHeight: '28px' }],
        h8: ['20px', { lineHeight: '28px' }],
        h9: ['18px', { lineHeight: '26px' }],
        h10: ['16px', { lineHeight: '24px' }],
        h11: ['14px', { lineHeight: '20px' }],
        h12: ['12px', { lineHeight: '18px' }],

        // Body text
        'body-sm': ['14px', { lineHeight: '20px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-xl': ['20px', { lineHeight: '30px' }],
      },


      // Border radius
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      
      // Gaps for grid/flex
      gap: theme => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
};

