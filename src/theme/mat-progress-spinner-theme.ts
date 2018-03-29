import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matProgressSpinnerTheme(theme: Theme): Object {
    return {
        '.mat-progress-spinner, .mat-spinner': {
            '& circle': {
                stroke: matColor(theme.primary)
            },
            '&.mat-accent circle': {
                stroke: matColor(theme.accent)
            },
            '&.mat-warn circle': {
                stroke: matColor(theme.warn)
            }
        }
    };
}
