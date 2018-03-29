import { matTypographyLevelToStyles } from './mat-typography-level-to-styles';

import { TypographyConfig } from '../interfaces';

export function matDialogTypography(config: TypographyConfig): Object {
    return {
        '.mat-dialog-title': matTypographyLevelToStyles(config, 'title')
    };
}
