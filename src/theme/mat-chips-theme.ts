import {
    Theme,
    Palette
} from '../interfaces';
import { matColor } from '../mat-color';

export function matChipsTheme(theme: Theme): Object {
    return {
        '.mat-chip:not(.mat-basic-chip)': matChipsColor(matColor(theme.foreground, 'text'), matColor(theme.background, 'unselected-chip')),
        '.mat-chip.mat-chip-selected': {
            ...chipsThemeColor('&.mat-primary', theme.primary),
            ...chipsThemeColor('&.mat-warn', theme.warn),
            ...chipsThemeColor('&.mat-accent', theme.accent)
        }
    };
}

function matChipsColor(foreground: string, background: string): Object {
    return {
        'background-color': background,
        color: foreground,
        '& .mat-chip-remove': {
            color: foreground,
            opacity: 0.4
        },
        '& .mat-chip-remove:hover': {
            opacity: 0.54
        }
    };
}

function chipsThemeColor(key: string, palette: Palette): Object {
    const foreground: string = matColor(palette, 'default-contrast');

    return {
        [key]: {
            'background-color': matColor(palette),
            color: foreground
        },
        [`${key} .mat-chip-remove`]: {
            color: foreground,
            opacity: 0.4
        },
        [`${key}  .mat-chip-remove:hover`]: {
            opacity: 0.54
        }
    };
}
