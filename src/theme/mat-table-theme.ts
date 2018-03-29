import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matTableTheme(theme: Theme): Object {
    return {
        '.mat-table': {
            background: matColor(theme.background, 'card')
        },
        '.mat-row, .mat-header-row': {
            'border-bottom-color': matColor(theme.foreground, 'divider')
        },
        '.mat-header-cell': {
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-cell': {
            color: matColor(theme.foreground, 'text')
        }
    };
}
