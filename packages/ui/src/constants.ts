interface Color {
    light:  string;
    medium: string;
    strong: string;
}

interface Colors {
    GRAPE_FRUIT: Color;
    BITTER_SWEET: Color;
    SUNFLOWER: Color;
    GRASS: Color;
    MINT: Color;
    AQUA: Color;
    LIGHT_GREY: Color;
    DARK_GREY: Color;
}

/**
 * @link https://d13yacurqjgara.cloudfront.net/users/482626/screenshots/2623951/flat-colors.png
 * TODO : Add `BLUE_JEANS`, `LAVENDER`, `LAVENDER`, `SKIN_TONE`
 */
export const COLORS: Colors = {
    GRAPE_FRUIT: {
        light:  '#f76d82',
        medium: '#ec5564',
        strong: '#d95552'
    },

    BITTER_SWEET: {
        light:  '#fc8370',
        medium: '#fb6d51',
        strong: '#e8563f'
    },

    SUNFLOWER: {
        light:  '#fcd277',
        medium: '#fecd57',
        strong: '#f5ba45'
    },

    GRASS: {
        light:  '#fcd277',
        medium: '#fecd57',
        strong: '#f5ba45'
    },

    MINT: {
        light: '#62ddbd',
        medium: '#46cead',
        strong: '#35bb9b'
    },

    AQUA: {
        light: '#6BD4EF',
        medium: '#55C0E6',
        strong: '#41AED7'
    },

    LIGHT_GREY: {
        light: '#f4f6f9',
        medium: '#e5e8ec',
        strong: '#cbd0d8'
    },

    DARK_GREY: {
        light: '#a9b1bc',
        medium: '#646c77',
        strong: '#424953'
    }
};
