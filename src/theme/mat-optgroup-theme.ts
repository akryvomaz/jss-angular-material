import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matOptgroupTheme(theme: Theme): Object {
    return {
        '.mat-optgroup-label': {
            color: matColor(theme.foreground, 'secondary-text')
        },
        '.mat-optgroup-disabled .mat-optgroup-label': {
            color: matColor(theme.foreground, 'hint-text')
        }
    };
}
