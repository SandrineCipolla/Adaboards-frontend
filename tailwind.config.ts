const config = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: '#29262C',
                text: '#ffffff',
                error:'#FF7B7B',
                succes:'#CAFCA0',
                primary:'#C6ABFF',
                todo:'#FFE58F',
                doing:'#A0FCF3',
            },
            fontFamily: {
                gabarito: ['Gabarito', 'sans-serif'],
                gloria: ['Gloria Hallelujah', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

export default config;