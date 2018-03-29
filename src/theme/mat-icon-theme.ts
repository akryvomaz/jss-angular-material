import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

// Include this empty mixin for consistency with the other components.
export function matIconTheme(theme: Theme): Object {
    return {
        '.mat-icon': {
            '&.mat-primary': {
                color: matColor(theme.primary)
            },
            '&.mat-accent': {
                color: matColor(theme.accent)
            },
            '&.mat-warn': {
                color: matColor(theme.warn)
            }
        }
    };
}
