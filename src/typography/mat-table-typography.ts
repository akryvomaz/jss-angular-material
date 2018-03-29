import {
    matFontSize,
    matFontWeight,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matTableTypography(config: TypographyConfig): Object {
    return {
        '.mat-table': {
            'font-family': matFontFamily(config)
        },
        '.mat-header-cell': {
            'font-size': matFontSize(config, 'caption'),
            'font-weight': matFontWeight(config, 'body-2')
        },
        '.mat-cell': {
            'font-size': matFontSize(config, 'body-1')
        }
    };
}
