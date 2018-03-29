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
    darkDividers,
    darkDisabledText,
    darkSecondaryText,
    darkFocused
} from './constants';

// Creates a container object for a light theme to be given to individual component theme mixins.
export function matLightTheme(primary: Palette, accent: Palette, warn: Palette = matPalette(matRed)): Theme {
    return {
        primary,
        accent,
        warn,
        'is-dark': false,
        foreground: matLightThemeForeground,
        background: matLightThemeBackground
    };
}

// Foreground palette for light themes.
const matLightThemeForeground: Foreground = {
    base: 'black',
    divider: darkDividers,
    dividers: darkDividers,
    disabled: darkDisabledText,
    'disabled-button': 'rgba(black, 0.26)',
    'disabled-text': darkDisabledText,
    'hint-text': darkDisabledText,
    'secondary-text': darkSecondaryText,
    icon: 'rgba(black, 0.54)',
    icons: 'rgba(black, 0.54)',
    text: 'rgba(black, 0.87)',
    'slider-min': 'rgba(black, 0.87)',
    'slider-off': 'rgba(black, 0.26)',
    'slider-off-active': 'rgba(black, 0.38)'
};

// Background palette for dark themes.
const matLightThemeBackground: Background = {
    'status-bar': matGrey[300],
    'app-bar': matGrey[100],
    background: matGrey[50],
    hover: 'rgba(black, 0.04)',
    card: 'white',
    dialog: 'white',
    'disabled-button': 'rgba(black, 0.12)',
    'raised-button': 'white',
    'focused-button': darkFocused,
    'selected-button': matGrey[300],
    'selected-disabled-button': matGrey[400],
    'disabled-button-toggle': matGrey[200],
    'unselected-chip': matGrey[300],
    'disabled-list-option': matGrey[200]
};
