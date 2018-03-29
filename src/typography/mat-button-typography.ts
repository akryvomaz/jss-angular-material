import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matButtonTypography(config: TypographyConfig): Object {
    return {
        '.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button, .mat-fab, .mat-mini-fab': {
            'font-family': matFontFamily(config, 'button'),
            'font-size': matFontSize(config, 'button'),
            'font-weight': matFontWeight(config, 'button')
        }
    };
}
