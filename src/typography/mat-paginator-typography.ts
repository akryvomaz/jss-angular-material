import {
    matFontSize,
    matFontFamily
} from '../utils';

import { TypographyConfig } from '../interfaces';

export function matPaginatorTypography(config: TypographyConfig): Object {
    return {
        '.mat-paginator, .mat-paginator-page-size .mat-select-trigger': {
            'font-family': matFontFamily(config, 'caption'),
            'font-size': matFontSize(config, 'caption')
        }
    };
}
