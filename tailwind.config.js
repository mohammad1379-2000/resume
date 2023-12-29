// tailwind.config.js
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        nextui({
            layout: {
                fontSize: {
                    tiny: '1.5rem',
                    small: '1.75rem',
                    medium: '2.125rem',
                    large: '2.375rem',
                },
            },
            themes: {
                light: {
                    layout: {},
                    colors: {
                        background: '#F4F4F4',
                        content1: '#EDEDED',
                        content2: '#CFCFCF',
                        divider: '#00000026',
                        default: {
                            0: '#ffffff',
                            500: '#00000080',
                            600: '#00000099',
                            850: '#000000d9',
                            1000: '#000000',
                        },
                        green: { 50: '#8CC84B', 100: '#8BC500' },
                        blue: { 50: '#00D8FF', 100: '#007ACC' },
                        gray: { 50: '#BABABA', 100: '#828282' },
                    },
                },
                dark: {
                    layout: {},
                    colors: {
                        background: '#161616',
                        content1: '#121212',
                        content2: '#202020',
                        divider: '#ffffff26',
                        default: {
                            0: '#000000',
                            500: '#ffffff80',
                            600: '#ffffff99',
                            850: '#ffffffd9',
                            1000: '#ffffff',
                        },
                    },
                },
            },
        }),
    ],
}
