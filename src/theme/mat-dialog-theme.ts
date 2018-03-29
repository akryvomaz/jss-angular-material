import { Theme } from '../interfaces';
import { matColor } from '../mat-color';

export function matDialogTheme(theme: Theme): Object {
    return {
        '.mat-dialog-container': {
            background: matColor(theme.background, 'dialog'),
            color: matColor(theme.foreground, 'text')
        }
    };
}
