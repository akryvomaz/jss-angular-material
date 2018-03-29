import {
    Theme,
    Palette
} from '../interfaces';
import { matColor } from '../mat-color';

export function matRadioTheme(theme: Theme): Object {
    const foregroundDisabled: string = matColor(theme.foreground, 'disabled');

    return {
        '.mat-radio-outer-circle': {
            'border-color': matColor(theme.foreground, 'secondary-text')
        },
        '.mat-radio-disabled .mat-radio-outer-circle': {
            'border-color': foregroundDisabled
        },
        '.mat-radio-disabled': {
            '& .mat-radio-ripple .mat-ripple-element, .mat-radio-inner-circle': {
                'background-color': foregroundDisabled
            },
            '& .mat-radio-label-content': {
                color: foregroundDisabled
            }
        },
        '.mat-radio-button': {
            ...radioColor('&.mat-primary', theme.primary),
            ...radioColor('&.mat-accent', theme.accent),
            ...radioColor('&.mat-warn', theme.warn)
        }
    };
}

function radioColor(key: string, palette: Palette): Object {
    const color: string = matColor(palette);

    return {
        [`${key}.mat-radio-checked .mat-radio-outer-circle`]: {
            'border-color': color
        },
        [`${key} .mat-radio-inner-circle`]: {
            'background-color': color
        },
        [`${key} .mat-radio-ripple .mat-ripple-element`]: {
            'background-color': matColor(palette, 0.26)
        }
    };
}
