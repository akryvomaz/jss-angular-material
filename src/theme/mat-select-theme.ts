import { Theme } from '../interfaces';
import { matColor } from '../mat-color';
import { matControlPlaceholderColor } from './mat-control-placeholder-color';

export function matSelectTheme(theme: Theme): Object {
    const warn: string = matColor(theme.warn);
    const foregroundDisabledText: string = matColor(theme.foreground, 'disabled-text');

    return {
        '.mat-select-content, .mat-select-panel-done-animating': {
            background: matColor(theme.background, 'card')
        },
        '.mat-select-value': {
            color: matColor(theme.foreground, 'text')
        },
        '.mat-select-placeholder': {
            color: matControlPlaceholderColor(theme)
        },
        '.mat-select-disabled .mat-select-value': {
            color: foregroundDisabledText
        },
        '.mat-select-arrow': {
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-select-panel': {
            '& .mat-option.mat-selected:not(.mat-option-multiple)': {
                background: matColor(theme.background, 'hover', 0.12)
            }
        },
        '.mat-form-field': {
            ...focused('.mat-primary', matColor(theme.primary)),
            ...focused('.mat-accent', matColor(theme.accent)),
            ...focused('.mat-warn', matColor(theme.warn)),
            '& .mat-select.mat-select-invalid .mat-select-arrow': {
                color: warn
            },
            '& .mat-select.mat-select-disabled .mat-select-arrow': {
                color: foregroundDisabledText
            }
        }
    };
}

function focused(key: string, color: string): Object {
    return {
        [`&.mat-focused${key} .mat-select-arrow`]: {
            color
        }
    };
}
