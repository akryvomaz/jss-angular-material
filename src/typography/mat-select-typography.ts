import {
    matLineHeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matSelectTypography(config: TypographyConfig): Object {
    // The unit-less line-height from the font config.
    const lineHeight: number | string = matLineHeight(config, 'input');

    return {
        '.mat-select': {
            'font-family': matFontFamily(config)
        },

        '.mat-select-trigger': {
            height: `${lineHeight}em`
        }
    };
}
