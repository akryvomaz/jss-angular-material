import {
    Palette,
    Theme,
    Foreground,
    Background
} from './interfaces';

import { matPalette } from './mat-palette';

import {
    matRed,
    matGrey
} from './palettes';

import {
    lightDividers,
    lightDisabledText,
    lightSecondaryText,
    lightFocused
} from './constants';

// Creates a container object for a dark theme to be given to individual component theme mixins.
export function matDarkTheme(primary: Palette, accent: Palette, warn: Palette = matPalette(matRed)): Theme {
    return {
        primary,
        accent,
        warn,
        'is-dark': true,
        foreground: matDarkThemeForeground,
        background: matDarkThemeBackground
    };
}

// Foreground palette for dark themes.
const matDarkThemeForeground: Foreground = {
    base: 'white',
    divider: lightDividers,
    dividers: lightDividers,
    disabled: lightDisabledText,
    'disabled-button': 'rgba(white, 0.3)',
    'disabled-text': lightDisabledText,
    'hint-text': lightDisabledText,
    'secondary-text': lightSecondaryText,
    icon: 'white',
    icons: 'white',
    text: 'white',
    'slider-min': 'white',
    'slider-off': 'rgba(white, 0.3)',
    'slider-off-active': 'rgba(white, 0.3)'
};

// Background palette for dark themes.
const matDarkThemeBackground: Background = {
    'status-bar': 'black',
    'app-bar': matGrey[900],
    background: '#303030',
    hover: 'rgba(white, 0.04)',
    card: matGrey[800],
    dialog: matGrey[800],
    'disabled-button': 'rgba(white, 0.12)',
    'raised-button': matGrey[800],
    'focused-button': lightFocused,
    'selected-button': matGrey[900],
    'selected-disabled-button': matGrey[800],
    'disabled-button-toggle': 'black',
    'unselected-chip': matGrey[700],
    'disabled-list-option': 'black'
};
