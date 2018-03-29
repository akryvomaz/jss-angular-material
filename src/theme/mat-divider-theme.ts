import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matDividerTheme(theme: Theme): Object {
    const foregroundDivider: string = matColor(theme.foreground, 'divider');

    return {
        '.mat-divider': {
            'border-top-color': foregroundDivider
        },
        '.mat-divider-vertical': {
            'border-right-color': foregroundDivider
        }
    };
}
