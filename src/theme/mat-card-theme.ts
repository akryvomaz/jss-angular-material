import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matCardTheme(theme: Theme): Object {
    return {
        '.mat-card': {
            background: matColor(theme.background, 'card'),
            color: matColor(theme.foreground, 'text')
        },
        '.mat-card-subtitle': {
            color: matColor(theme.foreground, 'secondary-text')
        }
    };
}
