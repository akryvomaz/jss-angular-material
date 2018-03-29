import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matButtonToggleTheme(theme: Theme): Object {
    return {
        '.mat-button-toggle': {
            color: matColor(theme.foreground, 'hint-text'),
            '&.cdk-focused': {
                '& .mat-button-toggle-focus-overlay': {
                    'background-color': matColor(theme.background, 'focused-button')
                }
            }
        },
        '.mat-button-toggle-checked': {
            'background-color': matColor(theme.background, 'selected-button'),
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-button-toggle-disabled': {
            'background-color': matColor(theme.background, 'disabled-button-toggle'),
            color: matColor(theme.foreground, 'disabled-button'),
            '&.mat-button-toggle-checked': {
                'background-color': matColor(theme.background, 'selected-disabled-button')
            }
        }
    };
}
