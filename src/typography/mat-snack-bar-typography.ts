import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matSnackBarTypography(config: TypographyConfig): Object {
    return {
        '.mat-simple-snackbar': {
            'font-family': matFontFamily(config, 'body-1'),
            'font-size': matFontSize(config, 'body-1')
        },
        '.mat-simple-snackbar-action': {
            'line-height': 1,
            'font-family': 'inherit',
            'font-size': 'inherit',
            'font-weight': matFontWeight(config, 'button')
        }
    };
}
