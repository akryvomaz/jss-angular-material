import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matListTheme(theme: Theme): Object {
    const foregroundText: string = matColor(theme.foreground, 'text');

    return {
        '.mat-list, .mat-nav-list, .mat-selection-list': {
            '& .mat-list-item': {
                color: foregroundText
            },
            '& .mat-list-option': {
                color: foregroundText
            },
            '& .mat-subheader': {
                color: matColor(theme.foreground, 'secondary-text')
            }
        },
        '.mat-list-item-disabled': {
            'background-color': matColor(theme.background, 'disabled-list-option')
        },
        '.mat-list-option, .mat-nav-list .mat-list-item': {
            '&:hover, &.mat-list-item-focus': {
                background: matColor(theme.background, 'hover')
            }
        }
    };
}
