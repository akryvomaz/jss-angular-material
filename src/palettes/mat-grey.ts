import { Palette } from '../interfaces';

import {
    darkPrimaryText,
    lightPrimaryText
} from '../constants';

export const matGrey: Palette = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#ffffff',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
    contrast: {
        50: darkPrimaryText,
        100: darkPrimaryText,
        200: darkPrimaryText,
        300: darkPrimaryText,
        400: darkPrimaryText,
        500: darkPrimaryText,
        600: lightPrimaryText,
        700: lightPrimaryText,
        800: lightPrimaryText,
        900: lightPrimaryText,
        A100: darkPrimaryText,
        A200: darkPrimaryText,
        A400: darkPrimaryText,
        A700: lightPrimaryText
    }
};

// Alias for alternate spelling.
export const matGray: Palette = matGrey;
