import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matPaginatorTheme(theme: Theme): Object {
    const foregroundIcon: string = matColor(theme.foreground, 'icon');

    return {
        '.mat-paginator': {
            background: matColor(theme.background, 'card')
        },
        '.mat-paginator, .mat-paginator-page-size .mat-select-trigger': {
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-paginator-decrement, .mat-paginator-increment': {
            'border-top': `2px solid ${foregroundIcon}`,
            'border-right': `2px solid ${foregroundIcon}`
        },
        '.mat-paginator-first, .mat-paginator-last': {
            'border-top': `2px solid ${foregroundIcon}`
        },
        '.mat-icon-button[disabled]': {
            '& .mat-paginator-decrement, .mat-paginator-increment, .mat-paginator-first, .mat-paginator-last': {
                'border-color': matColor(theme.foreground, 'disabled')
            }
        }
    };
}
